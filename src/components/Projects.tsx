"use client";

import { useState, useRef } from "react";
import projects from "@/lib/data/projects";
import { FaLink, FaDesktop } from "react-icons/fa";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const VISIBLE_COUNT = 2;
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (expanded) {
      // collapsing: scroll the section into view first so the
      // shrinking height doesn't yank the viewport around
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setExpanded((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="scroll-mt-24">
      <div className="flex justify-between flex-wrap">
        <AnimatePresence initial={false}>
          {visibleProjects.length !== 0 &&
            visibleProjects.map((el, i) => (
              <motion.div
                key={el.name ?? i}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full md:w-[48%] mb-10 p-3 bg-[var(--card)] rounded-2xl relative"
              >
                {el.name === "Dandoo" && (
                  <div className="absolute right-1/2 border border-[var(--border)] px-3 py-1 rounded-full bg-[var(--card)] top-0 translate-x-1/2 text-xs flex items-center justify-center gap-2">
                    <FaDesktop className="text-sm" />
                    <p>Built for big screens</p>
                  </div>
                )}
                {/* add blurring later */}
                <Image
                  src={el.img}
                  alt="binary-blogs-img"
                  width={800}
                  height={600}
                  className="w-full rounded-2xl h-auto"
                />
                <h3 className="font my-1">{el.name}</h3>
                <p className="text-[var(--secondary)] leading-5 text-sm ">{el.details}</p>
                <div className="flex items-center gap-5 mt-2">
                  {el.wLink && (
                    <a target="_blank" className="text-sm" href={el.wLink}>
                      <div className="flex items-center gap-2">
                        <FaLink />
                        <p className="hover:underline underline-offset-4">Live link</p>
                      </div>
                    </a>
                  )}
                  <a target="_blank" className="text-sm" href={el.gLink}>
                    <div className="flex items-center gap-2">
                      <FaGithub />
                      <p className="hover:underline underline-offset-4">Repo link</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {projects.length > VISIBLE_COUNT && (
        <div className="flex justify-center -mt-4">
          <button
            onClick={handleToggle}
            className="text-sm border border-[var(--border)] px-4 py-1.5 rounded-md hover:bg-[var(--card)] transition-colors"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
