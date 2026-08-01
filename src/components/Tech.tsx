import Image from "next/image";
import tech from "@/lib/data/tech";
import { playSound } from "@/lib/hover-sound";

export default function Tech() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-2 overflow-hidden">
        {tech.length !== 0 &&
          tech.map((ell, i) => (
            <div
              key={i}
              className="flex border py-1.5 px-3 border-[var(--border)] rounded-full bg-[var(--card)] items-center justify-center gap-1 hover:brightness-150 hover:cursor-default"
              onMouseEnter={() => playSound("hover")}
            >
              <Image width={18} height={18} alt="logo" src={ell.logo} />
              <p className="text-xs">{ell.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
