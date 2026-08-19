"use client";
import { playSound } from "@/lib/hover-sound";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ThinkingOrb } from "thinking-orbs";

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
    <motion.section initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mt-[15vh] md:mt-[20vh] items-center justify-start flex">
        <ThinkingOrb state="composing" size={64} />
        <div className="">
          <h1 className="text-xl font-semibold">Faris</h1>
          <p className="text-xs text-[var(--secondary)]">{currentDate}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm">
          I am a software engineer based in Bangalore, India. I love building cool stuff
          and reading tech blogs. I have recently built{" "}
          <a
            href="https://www.accifio.xyz/"
            target="_blank"
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            accifio
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/shaikhFaris/sms-campaign-processing-system"
            target="_blank"
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            sms-campaign-system
          </a>
          .{" "}
          <span className="hidden md:inline">
            Currently I am diving deep into production grade backends and distributed
            systems.
          </span>
        </p>
        <p className="mt-3 text-sm block md:hidden">
          Currently I am diving deep into production grade backends and distributed
          systems.
        </p>
        <p className="text-[var(--secondary)] mt-3 text-sm">
          Btw I also have a great{" "}
          <span
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-default hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            Taste in Design
          </span>{" "}
          which you will notice as you go through my work.{" "}
          <span className="hidden md:inline">
            I design in figma and then ship it with cool animations.
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
    </motion.section>
  );
}
