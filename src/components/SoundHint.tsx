"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { LuHeadphoneOff, LuHeadphones } from "react-icons/lu";

type Stage = "prompt" | "enabled" | "hidden";

export default function SoundHint() {
  const [stage, setStage] = useState<Stage>("prompt");

  useEffect(() => {
    // If no gesture happens at all, dismiss the prompt after 5s regardless.
    const promptTimer = setTimeout(() => {
      setStage((s) => (s === "prompt" ? "hidden" : s));
    }, 3000);

    const onUnlock = () => setStage("enabled");
    window.addEventListener("audio-unlocked", onUnlock);

    return () => {
      clearTimeout(promptTimer);
      window.removeEventListener("audio-unlocked", onUnlock);
    };
  }, []);

  // Once "enabled", show the confirmation briefly, then fade away for good.
  useEffect(() => {
    if (stage !== "enabled") return;
    const timer = setTimeout(() => setStage("hidden"), 1500);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <AnimatePresence>
      {stage !== "hidden" && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ type: "spring", visualDuration: 0.4, bounce: 0.2, delay: 0.5 }}
          className="fixed left-1/2 -translate-x-1/2 top-4 z-40 flex items-center gap-1 rounded-md bg-[var(--card)] p-2 hover:bg-[var(--card-hover)]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {stage === "prompt" ? (
              <motion.div
                key="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1"
              >
                <LuHeadphoneOff className="size-4 text-red-500" />
                <p className="text-xs">Tap to enable sound</p>
              </motion.div>
            ) : (
              <motion.div
                key="enabled"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1"
              >
                <LuHeadphones className="size-4 text-green-500" />
                <p className="text-xs">Sound enabled</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
