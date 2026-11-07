"use client";

import Heading from "@/components/Heading";
import Tech from "@/components/Tech";
import BlurReveal from "@/components/BlurReveal";

export default function Skills() {
  return (
    <BlurReveal className="mt-8" order={2}>
      <Heading>Tech that I use</Heading>
      <Tech />
    </BlurReveal>
  );
}
