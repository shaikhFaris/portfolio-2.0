"use client";
import work from "@/lib/data/work";
import Image from "next/image";
import { motion } from "motion/react";
import Heading from "@/components/Heading";
import { playSound } from "@/lib/hover-sound";

export default function Experience() {
  return (
    <section>
      <div className="mt-4">
        <Heading>I Worked At</Heading>
        <div>
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
                      height={35}
                      className="rounded-full border border-[var(--border)] "
                      width={35}
                      src={el.img}
                    ></Image>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm">
                          {el.title}
                          <span className="text-xs md:hidden whitespace-nowrap ml-2 text-[var(--secondary)] ">
                            [{el.date}]
                          </span>
                        </h3>
                        <span className="md:text-[13px] hidden md:inline">{el.date}</span>
                      </div>
                      <p className="text-sm leading-tight text-[var(--secondary)]">
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
