import work from "@/lib/data/work";
import Image from "next/image";

export default function Experience() {
  return (
    <section>
      <div className="mt-8">
        <h3 className="font-medium text-lg">I Worked At</h3>
        <div className="mt-2">
          {work.length !== 0 &&
            work.map((el, i) => (
              <div key={i}>
                <div className="flex mb-5 justify-between">
                  <div className="flex justify-center w-full md:w-3/4 gap-3 items-start">
                    <Image
                      alt="Logo"
                      height={45}
                      className="rounded-full border border-[var(--border)] "
                      width={45}
                      src={el.img}
                    ></Image>
                    <div className="w-full">
                      <h3 className="font-medium">
                        {el.title}{" "}
                        <span className="text-xs text-[var(--secondary)] md:hidden">
                          [{el.date}]
                        </span>
                      </h3>
                      <p className="text-sm md:text-base text-[var(--secondary)]">
                        {el.details}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs text-right md:text-sm">{el.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
