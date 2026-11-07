import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProjectLoaders() {
  return (
    <div className="flex w-full gap-3 overflow-x-auto px-4 pt-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4 sm:px-6">
      {[1, 2, 3].map((el, i) => (
        <div
          key={i}
          className="relative w-[85cqw] max-w-[calc(100vw-2rem)] shrink-0 rounded-2xl bg-[#171717] sm:w-[60cqw] md:w-[48cqw]"
        >
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton className="h-[35vh] mb-2" borderRadius={12} enableAnimation />
            <Skeleton height={20} className="mb-1" count={2} />
          </SkeletonTheme>
        </div>
      ))}
    </div>
  );
}
