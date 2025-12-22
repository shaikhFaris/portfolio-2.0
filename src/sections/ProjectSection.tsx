import ProjectLoaders from "@/components/loaders/ProjectLoaders";
import Projects from "@/components/Projects";
import { Suspense } from "react";

export default function ProjectSection() {
  return (
    <section id="project-section" className="mt-8">
      <h3 className="font-medium mb-4 text-lg">Cool Projects</h3>
      <Suspense fallback={<ProjectLoaders />}>
        <Projects />
      </Suspense>
    </section>
  );
}
