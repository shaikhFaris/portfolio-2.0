import Image from "next/image";
import tech from "@/data/tech";

export default function Tech() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-2 overflow-hidden">
        {tech.length !== 0 &&
          tech.map((ell, i) => (
            <div
              key={i}
              className="flex border py-1.5 px-3 border-[var(--border)] rounded-full bg-[var(--card)] items-center justify-center gap-1"
            >
              <Image width={20} height={20} alt="logo" src={ell.logo} />
              <p className="text-sm">{ell.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
