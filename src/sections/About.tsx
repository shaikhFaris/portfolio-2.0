"use client";
import { playSound } from "@/lib/hover-sound";
import BlurReveal from "@/components/BlurReveal";
import { useEffect, useState } from "react";
import { ThinkingOrb } from "thinking-orbs";
import Image from "next/image";

export default function About() {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const date = new Date();

    const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}.${date.getFullYear()}`;

    setCurrentDate(formattedDate);
  }, []);
  return (
    <BlurReveal as="section">
      <div className="mt-[15vh] md:mt-[20vh] items-center justify-start flex">
        <ThinkingOrb state="composing" size={64} />
        <div className="">
          <h1 className="text-xl font-semibold">Faris</h1>
          <p className="text-xs text-[var(--secondary)]">{currentDate}</p>
        </div>
      </div>
      <div className="mt-2 text-[var(--secondary)]">
        <p className="text-sm">
          I am a full stack + ai engineer with high agency. I love building cool products
          and reading tech blogs. I have recently built{" "}
          <a
            href="https://github.com/shaikhFaris/cloudterm"
            target="_blank"
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            cloudterm
          </a>{" "}
          and{" "}
          <span className="inline-flex items-center gap-1 align-middle">
            <Image src={"/accifio.png"} alt={"logo"} width={16} height={16} />
            <a
              href="https://www.accifio.xyz/"
              target="_blank"
              className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer hover:brightness-150"
              onMouseEnter={() => playSound("tap")}
            >
              accifio
            </a>
          </span>{" "}
          . Currently I am diving deep into{" "}
          <span className="text-[var(--foreground)] ">backend and AI systems</span>.
        </p>
        <p className="text-[var(--secondary)] mt-3 text-sm">
          I also{" "}
          <span
            className="text-[var(--foreground)] hover:cursor-default hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            freelance
          </span>{" "}
          and have closed multiple freelance deals with clients who loved my work.
          Let&apos;s build something cool or increase your conversion with a good landing
          page. DM me on{" "}
          <a
            href="https://x.com/faris_shaikh247"
            target="_blank"
            onMouseEnter={() => playSound("tap")}
            className="inline-flex invert"
          >
            <Image
              src={"/x.svg"}
              alt={"X"}
              width={14}
              height={16}
              className="translate-y-0.25"
            />
          </a>
          .
        </p>
        <p className="text-[var(--secondary)] mt-3 text-sm">
          Btw I also have a great{" "}
          <span
            className="text-[var(--foreground)] hover:cursor-default hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            Taste in Design
          </span>{" "}
          which you will notice as you go through my work and{" "}
          <span className="hidden md:inline">
            I love to build in public and write about what I learn.
          </span>
        </p>
        <p className="text-[var(--secondary)] mt-3 text-sm">
          Let&apos;s have a talk on{" "}
          <a
            href="https://www.linkedin.com/in/shaikh-mohammad-faris-561550295"
            target="_blank"
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            Linkedin
          </a>
          ,{" "}
          <a
            href="https://x.com/faris_shaikh247"
            target="_blank"
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            X
          </a>{" "}
          or{" "}
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=sheikhfaris86@gmail.com&tf=cm"
            target="_blank"
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer "
            onMouseEnter={() => playSound("tap")}
          >
            email
          </a>
          .
        </p>
      </div>
    </BlurReveal>
  );
}
