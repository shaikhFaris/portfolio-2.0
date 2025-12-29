"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "motion/react";
const lines = [
  "Mounting virtual file systems and drivers...",
  "Initializing Linux kernel modules now...",
  "Starting systemd-journald.service daemon...",
  "Loading environment variables securely...",
  "Verifying Node.js runtime version...",
  "Checking npm cache integrity status...",
  "Starting Next.js App Router service...",
  "Loading React Server Components modules...",
  "Initializing Tailwind styles engine...",
  "Hydrating client modules runtime...",
  "System ready. Application boot complete...",
];

export default function ArchLoader({
  setBooted,
}: {
  setBooted: Dispatch<SetStateAction<boolean>>;
}) {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setOutput((prev) => [...prev, lines[i]]);
      i++;
      if (i === lines.length) {
        setBooted(true);
        clearInterval(interval);
      }
    }, 200); // terminal-like delay
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full text-xs md:text-sm bg-[var(--background)] absolute z-40 w-full font-mono pt-[16vh]">
      <div>
        {output.map((line, i) => (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i}
            className="mb-1 flex justify-start items-start gap-2"
          >
            <span className="text-nowrap">
              [ <span className="text-green-400">OK</span> ]
            </span>
            <span>{line}</span>
          </motion.div>
        ))}
        <span className="animate-pulse">█</span>
      </div>
    </div>
  );
}
