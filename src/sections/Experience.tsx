"use client";
import work from "@/lib/data/work";
import Image from "next/image";
import BlurReveal from "@/components/BlurReveal";
import Heading from "@/components/Heading";

export default function Experience() {
  return (
    <BlurReveal as="section" order={1}>
      <div className="mt-6">
        <Heading>I Worked At</Heading>
        <div>
          {work.length !== 0 &&
            work.map((el, i) => (
              <div key={i}>
                <div className="flex mb-3 justify-between">
                  <div className="flex justify-center w-full gap-3 items-center">
                    <Image
                      alt="Logo"
                      height={25}
                      className="rounded-sm"
                      width={25}
                      src={el.img}
                    ></Image>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm">
                          {el.title}
                          <p className="text-xs leading-tight text-[var(--secondary)]">
                            {el.role}
                          </p>
                        </h3>
                        <span className="text-xs md:text-[13px] truncate text-[var(--secondary)]">
                          {el.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </BlurReveal>
  );
}
