import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProjectLoaders() {
  return (
    <div className="flex justify-between flex-wrap">
      {[1, 2, 3].map((el, i) => (
        <div
          key={i}
          className="w-full md:w-[48%] mb-10 bg-[#171717] rounded-2xl relative"
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
