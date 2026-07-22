"use client";
import work from "@/lib/data/work";
import Image from "next/image";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section>
      <div className="mt-8">
        <h3 className="font-medium text-lg">I Worked At</h3>
        <div className="mt-2">
          {work.length !== 0 &&
            work.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                }}
              >
                <div className="flex mb-5 justify-between">
                  <div className="flex justify-center w-full gap-3 items-start">
                    <Image
                      alt="Logo"
                      height={40}
                      className="rounded-full border border-[var(--border)] "
                      width={40}
                      src={el.img}
                    ></Image>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          {el.title}
                          <span className="text-xs md:hidden whitespace-nowrap ml-2 text-[var(--secondary)] ">
                            [{el.date}]
                          </span>
                        </h3>
                        <span className="text-xs md:text-sm hidden md:inline">
                          {el.date}
                        </span>
                      </div>
                      <p className="text-sm md:text-base leading-tight text-[var(--secondary)]">
                        {el.details}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
