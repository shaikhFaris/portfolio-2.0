import Heading from "@/components/Heading";
import Typewriter from "@/components/Typewriter";

export default function About() {
  return (
    <section>
      <div className="mt-[16vh] items-center justify-between flex">
        <h1 className="text-2xl md:text-5xl font-semibold">
          Hi, I am <span className="text-white">Faris</span>
        </h1>
        <div className="border min-w-[10%] border-[var(--border)] bg-[var(--card)] px-2 py-1 md:px-4 text-lg font-mono md:py-2 rounded-md ">
          <Typewriter />
        </div>
      </div>
      <div className="mt-4 md:mt-8">
        <h3 className="font-medium mb-1 text-lg">About me</h3>
        <p className="text-sm md:text-base text-[var(--secondary)]">
          I am a developer from Bangalore, India. I love building cool stuff and enjoy
          learning CS ( I am obsessed with docker). I have a great sense of{" "}
          <span className="text-[var(--foreground)]">web designing</span> which you will
          notice as you go through my work. I have worked on{" "}
          <span className="text-[var(--foreground)]">
            freelance projects and interned
          </span>{" "}
          at amazing places. Btw I am open to work and freelance, just{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sheikhfaris86@gmail.com"
            target="_blank"
            className="text-[var(--foreground)] hover:underline underline-offset-4 hover:cursor-pointer "
          >
            contact me.
          </a>
        </p>
      </div>
    </section>
  );
}
