"use client";

import ProjectSection from "@/sections/ProjectSection";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Footer from "@/sections/Footer";
import { useState } from "react";
import ArchLoader from "@/components/ArchLoader";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!booted && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-[90%] h-screen max-w-screen-2xl relative md:w-4/5"
        >
          <ArchLoader setBooted={setBooted} />
        </motion.div>
      )}

      {booted && (
        <motion.div className="w-[90%] max-w-screen-2xl md:w-4/5">
          <About />
          <Experience />
          <Skills />
          <ProjectSection />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
