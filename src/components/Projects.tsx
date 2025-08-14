import projects from "@/data/projects";
import { FaLink } from "react-icons/fa";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex justify-between flex-wrap">
      {projects.length !== 0 &&
        projects.map((el, i) => (
          <div
            className="w-full md:w-[48%] mb-10 p-3 bg-[var(--card)] rounded-2xl relative"
            key={i}
          >
            {/* add blurring later */}
            <Image
              src={el.img}
              alt="binary-blogs-img"
              width={800}
              height={600}
              className="w-full rounded-2xl h-auto"
            />
            <h3 className="font my-1">{el.name}</h3>
            <p className="text-[var(--secondary)] leading-5 text-sm ">{el.details}</p>
            <div className="flex items-center gap-5 mt-2">
              {el.wLink && (
                <a target="_blank" className="text-sm" href={el.wLink}>
                  <div className="flex items-center gap-2">
                    <FaLink />
                    <p className="hover:underline underline-offset-4">Live link</p>
                  </div>
                </a>
              )}
              <a target="_blank" className="text-sm" href={el.gLink}>
                <div className="flex items-center gap-2">
                  <FaGithub />
                  <p className="hover:underline underline-offset-4">Repo link</p>
                </div>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
