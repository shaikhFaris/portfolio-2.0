import ComponentGallery from "@/components/component-showcase/ComponentGallery";
import gallery from "@/lib/data/gallery";

export default function GallerySection() {
  return (
    <section id="gallery-showcase" className="mt-8">
      <h3 className="font-medium mb-4 text-lg">Gallery</h3>

      <ComponentGallery items={gallery} />
    </section>
  );
}
