"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Typewriter() {
  const [text] = useTypewriter({
    words: ["npm run resume", "npx whoami"],
    loop: 0,
  });

  return (
    <>
      <p className="">
        $ <span className="">{text}</span>
        <Cursor />
      </p>
    </>
  );
}
