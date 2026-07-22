import type { ComponentShowcase } from "@/lib/data/gallery";
import ComponentCard from "./ComponentCard";

interface ComponentGalleryProps {
  items: ComponentShowcase[];
}

export default function ComponentGallery({ items }: ComponentGalleryProps) {
  return (
    <div className="flex flex-wrap items-center justify-between">
      {items.map((item) => (
        <ComponentCard key={item.title} item={item} />
      ))}
    </div>
  );
}
