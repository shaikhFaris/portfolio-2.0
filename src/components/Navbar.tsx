"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed z-30 top-3 flex items-center justify-center w-full">
      <div className="py-2 shadow-black shadow-2xl px-5 rounded-full bg-[var(--foreground)] top-2 text-[var(--background)] flex items-center justify-center gap-6">
        <Image
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          alt="home-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/home.svg"}
          width={20}
          height={20}
        />
        <Image
          onClick={() => {
            document.body.querySelector("#project-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          alt="projects-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/projects.svg"}
          width={20}
          height={20}
        />

        {/* <Image
            alt="home-logo"
            className="lg:hover:scale-150 duration-150"
            src={"/blog.svg"}
            width={20}
            height={20}
          /> */}
        <a href="https://github.com/shaikhFaris" target="_blank">
          <Image
            alt="github-logo"
            className="lg:hover:scale-150 duration-150"
            src={"/github.svg"}
            width={20}
            height={20}
          />
        </a>
        <a href="https://x.com/faris_shaikh247" target="_blank">
          <Image
            alt="X-logo"
            className="lg:hover:scale-150 duration-150"
            src={"/twitter.svg"}
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shaikh-mohammad-faris-561550295"
          target="_blank"
        >
          <Image
            alt="linkedin-logo"
            className="lg:hover:scale-150 duration-150"
            src={"/linkedin.svg"}
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  );
}
