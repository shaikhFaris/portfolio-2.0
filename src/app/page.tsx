import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Typewriter from "@/components/Typewriter";
import work from "@/data/work";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-[95%] md:w-4/5 ">
      <div className="mt-[10vh] items-center justify-between flex">
        <h1 className="text-5xl font-semibold">
          Hi, I am <span className="text-white">Faris</span>
        </h1>
        <div className="border border-[var(--border)] bg-[var(--card)] px-4 text-lg font-mono py-2 rounded-md ">
          {/* npm install resume */}
          <Typewriter />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-medium text-lg">About Me</h3>
        <p className="text-[var(--secondary)]">
          I am a developer from Bangalore, India. I love building cool stuff and enjoy
          learning CS ( I am obsessed with docker). I have a great sense of{" "}
          <span className="text-[var(--foreground)]">web designing</span> which you will
          notice as you go through my work. I have worked on{" "}
          <span className="text-[var(--foreground)]">
            freelance projects and interned
          </span>{" "}
          at amazing places. Btw I am open to work and freelance, just contact me.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="font-medium text-lg">I Worked At</h3>
        <div className="mt-2">
          {work.length !== 0 &&
            work.map((el, i) => (
              <div key={i} className="flex mb-5 justify-between">
                <div className="flex justify-center w-3/4 gap-3 items-start">
                  <Image
                    alt="Logo"
                    height={45}
                    className="rounded-full border border-[var(--border)] "
                    width={45}
                    src={el.img}
                  ></Image>
                  <div className="w-full">
                    <h3 className="font-medium">{el.title}</h3>
                    <p className="text-[var(--secondary)]">{el.details}</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm">{el.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-medium mb-4 text-lg">Tech I use</h3>
        <Tech />
      </div>
      <div className="mt-8">
        <h3 className="font-medium mb-4 text-lg">Cool Projects</h3>
        <Projects />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
