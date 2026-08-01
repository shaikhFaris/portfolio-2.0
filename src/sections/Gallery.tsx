"use client";

import ComponentGallery from "@/components/component-showcase/ComponentGallery";
import Heading from "@/components/Heading";
import gallery from "@/lib/data/gallery";

export default function GallerySection() {
  return (
    <section id="gallery-showcase" className="mt-8">
      <Heading>Gallery</Heading>

      <ComponentGallery items={gallery} />
    </section>
  );
}
