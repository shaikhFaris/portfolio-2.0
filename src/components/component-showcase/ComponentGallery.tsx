import type { ComponentShowcase } from "@/lib/data/gallery";
import ComponentCard from "./ComponentCard";

interface ComponentGalleryProps {
  items: ComponentShowcase[];
}

export default function ComponentGallery({ items }: ComponentGalleryProps) {
  return (
    <div
      role="region"
      aria-label="Gallery previews"
      tabIndex={0}
      className="flex w-full min-w-0 snap-x snap-proximity scroll-px-4 items-stretch gap-3 overflow-x-auto overscroll-x-contain px-4 pt-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--foreground)] sm:scroll-px-6 sm:gap-4 sm:px-6"
    >
      {items.map((item) => (
        <ComponentCard key={item.title} item={item} />
      ))}
    </div>
  );
}
