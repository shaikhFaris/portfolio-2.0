import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky z-40 top-3 flex items-center justify-center w-full">
      <div className="py-2 shadow-black shadow-2xl px-5 rounded-full bg-[var(--foreground)] top-2 text-[var(--background)] flex items-center justify-center gap-5">
        <Image
          alt="home-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/home.svg"}
          width={20}
          height={20}
        />
        <Image
          alt="home-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/projects.svg"}
          width={20}
          height={20}
        />
        <Image
          alt="home-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/blog.svg"}
          width={20}
          height={20}
        />
        <Image
          alt="home-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/github.svg"}
          width={20}
          height={20}
        />
        <Image
          alt="home-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/twitter.svg"}
          width={20}
          height={20}
        />
        <Image
          alt="home-logo"
          className="lg:hover:scale-150 duration-150"
          src={"/linkedin.svg"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
