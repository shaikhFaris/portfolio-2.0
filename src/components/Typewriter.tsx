"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Typewriter() {
  const [text] = useTypewriter({
    words: ["Student...", "Open Source Contributor...", "Web Devloper...", "Learner..."],
    loop: 0,
  });

  return (
    <>
      <p className="my-2 text-[var(--secondary)] text-2xl">
        I am a <span className="">{text}</span>
        <Cursor />
      </p>
    </>
  );
}
