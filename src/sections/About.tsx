"use client";
import { playSound } from "@/lib/hover-sound";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mt-[20vh] items-center justify-start flex gap-4">
        <h1 className="text-xl font-semibold">
          Hi, I am <span className="text-white">Faris</span>
        </h1>
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
          . Currently I am diving deep into production grade backends and distributed
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
          which you will notice as you go through my work. I design in figma and then ship
          it with cool animations.
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
            href="https://www.linkedin.com/in/shaikh-mohammad-faris-561550295"
            target="_blank"
            className="text-[var(--foreground)] underline underline-offset-4 hover:cursor-pointer hover:brightness-150"
            onMouseEnter={() => playSound("tap")}
          >
            X
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/shaikh-mohammad-faris-561550295"
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
