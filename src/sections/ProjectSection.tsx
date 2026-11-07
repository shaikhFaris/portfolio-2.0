"use client";

import Heading from "@/components/Heading";
import ProjectLoaders from "@/components/loaders/ProjectLoaders";
import Projects from "@/components/Projects";
import BlurReveal from "@/components/BlurReveal";
import { Suspense } from "react";

export default function ProjectSection() {
  return (
    <BlurReveal className="@container" order={3}>
      <section
        id="project-section"
        className="relative left-1/2 mt-8 w-screen -translate-x-1/2"
      >
        <div className="mx-auto w-[90%] max-w-screen-2xl md:w-4/5 lg:w-[60%] xl:w-[55%]">
          <Heading>Cool Projects</Heading>
        </div>
        <Suspense fallback={<ProjectLoaders />}>
          <Projects />
        </Suspense>
      </section>
    </BlurReveal>
  );
}
