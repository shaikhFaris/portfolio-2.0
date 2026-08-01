let ctx: AudioContext | null = null;
let unlocked = false;

const VOLUME = 0.2; // 0 = silent, 1 = full volume — tune this

// Map friendly names to file paths — add more here as needed.
const SOUND_SOURCES = {
  hover: "/sounds/hover.wav",
  tap: "/sounds/tap.wav",
  click: "/sounds/click.wav",
} as const;

type SoundName = keyof typeof SOUND_SOURCES;

// Buffers are cached per sound name, decoded once and reused.
const buffers = new Map<SoundName, AudioBuffer>();
const loading = new Map<SoundName, Promise<AudioBuffer | null>>();

function unlock() {
  if (unlocked) return;
  ctx = new AudioContext();
  unlocked = true;
  window.dispatchEvent(new Event("audio-unlocked"));
  window.removeEventListener("pointerdown", unlock);
  window.removeEventListener("keydown", unlock);
}

if (typeof window !== "undefined") {
  window.addEventListener("pointerdown", unlock, { once: true });
  window.addEventListener("keydown", unlock, { once: true });
}

async function getBuffer(name: SoundName): Promise<AudioBuffer | null> {
  if (!ctx) return null;

  const cached = buffers.get(name);
  if (cached) return cached;

  // If a decode for this sound is already in flight, reuse that promise
  // instead of firing a second fetch for the same file.
  const inFlight = loading.get(name);
  if (inFlight) return inFlight;

  const promise = (async () => {
    const res = await fetch(SOUND_SOURCES[name]);
    const arrayBuffer = await res.arrayBuffer();
    const decoded = await ctx!.decodeAudioData(arrayBuffer);
    buffers.set(name, decoded);
    loading.delete(name);
    return decoded;
  })();

  loading.set(name, promise);
  return promise;
}

export async function playSound(name: SoundName) {
  if (!ctx) return;
  const buf = await getBuffer(name);
  if (!buf) return;

  const source = ctx.createBufferSource();
  source.buffer = buf;

  const gain = ctx.createGain();
  gain.gain.value = VOLUME;

  source.connect(gain).connect(ctx.destination);
  source.start(0);
}
