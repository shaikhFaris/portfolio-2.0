"use client";

import Heading from "@/components/Heading";
import ProjectLoaders from "@/components/loaders/ProjectLoaders";
import Projects from "@/components/Projects";
import { Suspense } from "react";

export default function ProjectSection() {
  return (
    <section id="project-section" className="mt-8">
      <Heading>Cool Projects</Heading>
      <Suspense fallback={<ProjectLoaders />}>
        <Projects />
      </Suspense>
    </section>
  );
}
