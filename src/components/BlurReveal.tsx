"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type BlurRevealProps = {
  children: ReactNode;
  as?: "div" | "section";
  className?: string;
  id?: string;
  order?: number;
};

export default function BlurReveal({
  children,
  as = "div",
  className,
  id,
  order = 0,
}: BlurRevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;
  const delay = reduceMotion ? 0 : order * 0.12;

  return (
    <Component
      id={id}
      className={`${className ?? ""} motion-reduce:opacity-100! motion-reduce:filter-none! motion-reduce:transform-none!`}
      initial={reduceMotion ? false : { opacity: 0, filter: "blur(10px)", y: -8 }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transitionEnd: { filter: "none" },
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
        opacity: {
          duration: reduceMotion ? 0 : 0.4,
          delay,
          ease: "easeOut",
        },
        filter: {
          duration: reduceMotion ? 0 : 0.6,
          delay: reduceMotion ? 0 : delay + 0.08,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </Component>
  );
}
