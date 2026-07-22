"use client";

import { FaLink, FaDesktop } from "react-icons/fa";
import Image from "next/image";
import landingPages from "@/lib/data/landing-pages";
import ProjectLoaders from "./loaders/ProjectLoaders";
import { Suspense, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LandingPageSection() {
  return (
    <section id="landing-page-section" className="mt-8">
      <h3 className="font-medium mb-4 text-lg">Landing Pages</h3>
      <Suspense fallback={<ProjectLoaders />}>
        <LandingPage />
      </Suspense>
    </section>
  );
}

function LandingPage() {
  const VISIBLE_COUNT = 2;
  const [expanded, setExpanded] = useState(false);
  const visibleLandingPages = expanded
    ? landingPages
    : landingPages.slice(0, VISIBLE_COUNT);
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
          {visibleLandingPages.length !== 0 &&
            visibleLandingPages.map((el, i) => (
              <motion.a
                target="_blank"
                href={el.wLink ?? undefined}
                key={el.name ?? i}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full md:w-[48%] mb-10 rounded-2xl relative"
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
                  alt={el.name}
                  width={800}
                  height={600}
                  className="w-full rounded-2xl h-auto"
                />
              </motion.a>
            ))}
        </AnimatePresence>
      </div>

      {landingPages.length > VISIBLE_COUNT && (
        <div className="flex justify-center -mt-4">
          <button
            onClick={handleToggle}
            className="text-xs md:text-sm border border-[var(--border)] px-4 py-1.5 rounded-md hover:bg-[var(--card)] transition-colors"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
