import ProjectSection from "@/sections/ProjectSection";
import GallerySection from "@/sections/Gallery";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Footer from "@/sections/Footer";
import SoundHint from "@/components/SoundHint";
import type { ReactNode } from "react";

export default function Home({ children }: { children?: ReactNode }) {
  // const [booted, setBooted] = useState(false);

  return (
    <div className="w-[90%] max-w-screen-2xl md:w-4/5 lg:w-[60%] xl:w-[55%] relative">
      <SoundHint />
      <About />
      <Experience />
      <Skills />
      <ProjectSection />
      {children}
      <GallerySection />
      <Footer />
    </div>
  );
  // return (
  //   <AnimatePresence mode="wait">
  //     {!booted && (
  //       <motion.div
  //         key="loader"
  //         initial={{ opacity: 1 }}
  //         exit={{ opacity: 0 }}
  //         className="w-[90%] h-screen max-w-screen-2xl relative md:w-4/5 lg:w-[60%]"
  //       >
  //         <ArchLoader setBooted={setBooted} />
  //       </motion.div>
  //     )}

  //     {booted && (
  //       <motion.div className="w-[90%] max-w-screen-2xl md:w-4/5 lg:w-[60%] relative">
  //         <SoundHint />
  //         <About />
  //         <Experience />
  //         <Skills />
  //         <ProjectSection />
  //         <GallerySection />
  //         {/* <LandingPageSection /> */}
  //         <Footer />
  //       </motion.div>
  //     )}
  //   </AnimatePresence>
  // );
}
