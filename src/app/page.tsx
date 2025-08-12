import ProjectSection from "@/sections/ProjectSection";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";

export default function page() {
  return (
    <div className=" w-[95%] md:w-4/5 ">
      <About />
      <Experience />
      <Skills />
      <ProjectSection />
      <div className="h-screen"></div>
    </div>
  );
}
