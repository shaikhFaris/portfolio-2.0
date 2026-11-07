"use client";

import ComponentGallery from "@/components/component-showcase/ComponentGallery";
import Heading from "@/components/Heading";
import BlurReveal from "@/components/BlurReveal";
import gallery from "@/lib/data/gallery";

export default function GallerySection() {
  // Size cards against the portfolio column while the section spans the viewport.
  return (
    <BlurReveal className="@container" order={5}>
      <section
        id="gallery-showcase"
        className="relative left-1/2 mt-8 w-screen -translate-x-1/2"
      >
        <div className="mx-auto w-[90%] max-w-screen-2xl md:w-4/5 lg:w-[60%] xl:w-[55%]">
          <Heading>Gallery</Heading>
        </div>

        <ComponentGallery items={gallery} />
      </section>
    </BlurReveal>
  );
}
