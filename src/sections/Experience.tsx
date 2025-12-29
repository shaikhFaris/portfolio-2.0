"use client";
import work from "@/lib/data/work";
import Image from "next/image";
import { motion } from "motion/react";
import { FaBuilding } from "react-icons/fa";

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
                  <div className="flex justify-center w-full md:w-3/4 gap-3 items-start">
                    {el.isWorking ? (
                      <div className="size-[42px] flex items-center justify-center border border-[var(--border)] rounded-full bg-[var(--card)] ">
                        <FaBuilding />
                      </div>
                    ) : (
                      <Image
                        alt="Logo"
                        height={40}
                        className="rounded-full border border-[var(--border)] "
                        width={40}
                        src={el.img}
                      ></Image>
                    )}
                    <div className="w-full">
                      <h3 className="font-medium">
                        <span className={`${el.isWorking && "blur-[5px]"}`}>
                          {el.title}{" "}
                        </span>
                        <span className="text-xs text-[var(--secondary)] md:hidden">
                          [{el.date}]
                        </span>
                      </h3>
                      <p className="text-sm md:text-base text-[var(--secondary)]">
                        {el.details}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs text-right md:text-sm">{el.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
