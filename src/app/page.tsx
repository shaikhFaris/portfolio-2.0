import work from "@/data/work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[10vh] w-[95%]  md:w-4/5 ">
      <div className="">
        <h1 className="text-5xl font-medium">
          Hi, I am <span className="text-white">Faris</span>
        </h1>
        {/* <Typewriter /> */}
      </div>
      <div className="mt-5">
        <h3 className="font-medium text-lg">About Me</h3>
        <p className="text-[var(--secondary)] leading-5  w-2/3">
          I am a developer from Bangalore, India. I love building cool stuff and enjoy
          learning CS. I have worked on freelance projects and interned at amazing places.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="font-medium text-lg">I Worked At</h3>
        <div className="mt-2">
          {work.length !== 0 &&
            work.map((el, i) => (
              <div key={i} className="flex mb-5 justify-between">
                <div className="flex justify-center w-3/4 gap-3 items-start">
                  <Image
                    alt="Logo"
                    height={45}
                    className="rounded-full"
                    width={45}
                    src={el.img}
                  ></Image>
                  <div className="">
                    <h3 className="font-medium">{el.title}</h3>
                    <p className="text-[var(--secondary)] leading-5 ">{el.details}</p>
                  </div>
                </div>
                <div className="">
                  <p>{el.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
