"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import projects from "@/lib/data/projects";
import { FaLink, FaDesktop, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { playSound } from "@/lib/hover-sound";

type Filter = "all" | (typeof projects)[number]["tag"];

const filters: Filter[] = [
  "all",
  ...Array.from(new Set(projects.map((project) => project.tag))),
];

export default function Projects() {
  const VISIBLE_COUNT = 2;

  const [selectedFilter, setSelectedFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    return selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.tag === selectedFilter);
  }, [selectedFilter]);

  const visibleProjects = useMemo(() => {
    return expanded ? filteredProjects : filteredProjects.slice(0, VISIBLE_COUNT);
  }, [filteredProjects, expanded]);

  // Collapse whenever the filter changes
  useEffect(() => {
    setExpanded(false);
  }, [selectedFilter]);

  const handleToggle = async () => {
    playSound("click");
    if (expanded) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setExpanded((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="scroll-mt-24">
      <div className="flex items-center justify-start gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={async () => {
              playSound("click");
              setSelectedFilter(filter);
            }}
            className={`px-2.5 py-1.5 rounded-md text-xs mb-4 capitalize transition-colors border
              ${
                selectedFilter === filter
                  ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                  : "border-[var(--border)] hover:bg-[var(--card)]"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-between">
        <AnimatePresence initial={false}>
          {visibleProjects.map((el) => (
            <motion.div
              key={el.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full md:w-[48%] mb-10 p-3 bg-[var(--card)] rounded-2xl relative hover:bg-[var(--card-hover)]"
              onMouseEnter={() => playSound("hover")}
            >
              {el.name === "Dandoo" && (
                <div className="absolute right-1/2 top-0 translate-x-1/2 border border-[var(--border)] px-3 py-1 rounded-full bg-[var(--card)] text-xs flex items-center gap-2">
                  <FaDesktop className="text-sm" />
                  <p>Built for big screens</p>
                </div>
              )}

              <Image
                src={el.img}
                alt={el.name}
                width={800}
                height={600}
                className="w-full rounded-2xl h-auto"
              />

              <h3 className="text-sm my-1">{el.name}</h3>

              <p className="text-[var(--secondary)] text-[13px]">{el.details}</p>

              <div className="flex items-center gap-5 mt-2">
                {el.wLink && (
                  <a
                    href={el.wLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px]"
                  >
                    <div className="flex items-center gap-1">
                      <FaLink />
                      <p className="hover:underline underline-offset-4">Live link</p>
                    </div>
                  </a>
                )}

                <a
                  href={el.gLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px]"
                >
                  <div className="flex items-center gap-1">
                    <FaGithub />
                    <p className="hover:underline underline-offset-4">Repo link</p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length > VISIBLE_COUNT && (
        <div className="flex justify-center -mt-4">
          <button
            onClick={handleToggle}
            className="text-xs border border-[var(--border)] px-4 py-1.5 rounded-md hover:bg-[var(--card)] transition-colors"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
