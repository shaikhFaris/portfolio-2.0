"use client";

import { useState, useRef, useMemo, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import projects from "@/lib/data/projects";
import { FaLink, FaDesktop, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { playSound } from "@/lib/hover-sound";

type Filter = "all" | (typeof projects)[number]["tag"];

const filters: Filter[] = [
  "all",
  ...Array.from(new Set(projects.map((project) => project.tag))),
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>("all");
  const [rowHeight, setRowHeight] = useState<number | null>(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const reduceMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const rowObserverRef = useRef<ResizeObserver | null>(null);

  const measureRow = useCallback((node: HTMLDivElement | null) => {
    rowObserverRef.current?.disconnect();
    rowObserverRef.current = null;

    if (!node) return;

    const updateHeight = () => setRowHeight(node.offsetHeight);
    updateHeight();

    if (typeof ResizeObserver !== "undefined") {
      rowObserverRef.current = new ResizeObserver(updateHeight);
      rowObserverRef.current.observe(node);
    }
  }, []);

  const filteredProjects = useMemo(() => {
    return selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.tag === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="scroll-mt-24">
      <div className="mx-auto flex w-[90%] max-w-screen-2xl items-center justify-start gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:w-4/5 lg:w-[60%]">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={selectedFilter === filter}
            onClick={() => {
              if (selectedFilter === filter) return;
              playSound("click");
              setIsFiltering(!reduceMotion);
              setSelectedFilter(filter);
            }}
            className={`shrink-0 whitespace-nowrap px-2.5 py-1.5 rounded-md text-xs mb-4 capitalize transition-colors duration-200 motion-reduce:transition-none border
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

      <motion.div
        ref={containerRef}
        role="region"
        aria-label="Projects"
        aria-busy={isFiltering}
        tabIndex={0}
        initial={false}
        animate={{ height: rowHeight ?? "auto" }}
        transition={{
          duration: reduceMotion ? 0 : 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`w-full min-w-0 scroll-px-4 overflow-x-auto overscroll-x-contain [overflow-anchor:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--foreground)] sm:scroll-px-6 ${isFiltering ? "snap-none" : "snap-x snap-proximity"}`}
      >
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => {
            // Reset only after the old row is invisible to avoid a visible jump.
            if (containerRef.current) containerRef.current.scrollLeft = 0;
          }}
        >
          <motion.div
            key={selectedFilter}
            ref={measureRow}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            exit="exit"
            variants={{
              hidden: {
                opacity: 0,
                filter: reduceMotion ? "blur(0px)" : "blur(8px)",
                x: reduceMotion ? 0 : 12,
              },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                transitionEnd: { filter: "none" },
                transition: {
                  duration: reduceMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: reduceMotion ? 0 : 0.35, ease: "easeOut" },
                  filter: {
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : 0.08,
                    ease: "easeOut",
                  },
                },
              },
              exit: {
                opacity: reduceMotion ? 1 : 0,
                filter: reduceMotion ? "blur(0px)" : "blur(4px)",
                x: reduceMotion ? 0 : -8,
                transition: { duration: reduceMotion ? 0 : 0.16, ease: "easeOut" },
              },
            }}
            onAnimationComplete={(definition) => {
              if (definition === "visible") setIsFiltering(false);
            }}
            className="flex w-max min-w-full items-stretch gap-3 px-4 pt-1 pb-4 sm:gap-4 sm:px-6"
          >
            {filteredProjects.map((el) => (
              <article
                key={el.name}
                className="relative flex w-[85cqw] max-w-[calc(100vw-2rem)] shrink-0 snap-start flex-col rounded-2xl bg-[var(--card)] p-2 hover:bg-[var(--card-hover)] sm:w-[60cqw] sm:p-3 md:w-[48cqw]"
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
                  sizes="(min-width: 1024px) 29vw, (min-width: 768px) 39vw, (min-width: 640px) 54vw, 77vw"
                  className="w-full rounded-2xl h-auto"
                />

                <h3 className="text-sm my-1">{el.name}</h3>

                <p className="text-[var(--secondary)] text-[13px]">{el.details}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
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
                  {el.gLink && (
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
                  )}
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
