"use client";

import { motion } from "motion/react";

export default function Heading({ children }: { children: string }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-medium mb-2"
    >
      {children}
    </motion.h3>
  );
}
