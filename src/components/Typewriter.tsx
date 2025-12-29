"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Typewriter() {
  const [text] = useTypewriter({
    words: ["npm run resume", "pacman -S resume", "apt install resume"],
    loop: 0,
  });

  return (
    <>
      <p className="text-sm md:text-base">
        $ <span className="">{text}</span>
        <Cursor />
      </p>
    </>
  );
}
