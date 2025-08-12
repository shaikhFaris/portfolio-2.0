interface ProjectType {
  img: string;
  name: string;
  gLink: string;
  wLink: string | null;
  details: string;
}

const projects: ProjectType[] = [
  {
    img: "/proj-imgs/yami.png",
    name: "Yami UI",
    gLink: "https://github.com/shaikhFaris/yami-ui",
    wLink: "https://yami-ui.vercel.app",
    details:
      "React shader background components right out of the box to add some seriously cool vibes to your website.",
  },
  {
    img: "/proj-imgs/bb.png",
    name: "Binary Blogs",
    gLink: "https://github.com/shaikhFaris/Binary_Blogs",
    wLink: "https://binary-blogs-ten.vercel.app",
    details:
      "A cool and minimal website for blogging, distraction free. Built using MERN stack with JWT authentication. Also has a cool landing page.",
  },
  {
    img: "/proj-imgs/dandoo.png",
    name: "Dandoo",
    gLink: "https://github.com/shaikhFaris",
    wLink: "https://dandooo.netlify.app",
    details:
      "A cool and minimal website for blogging, distraction free. Built using MERN stack with JWT authentication. Also has a cool landing page.",
  },
  {
    img: "/proj-imgs/roh.png",
    name: "Rohum Landing Page",
    gLink: "https://github.com/shaikhFaris/ROHUM-landing-page",
    wLink: "https://rohum-landing-page.vercel.app",
    details:
      "Built a modern, stunnning landing page for an AI startup. Used R3F for 3D visuals and framer/gsap for cool effects and animations.",
  },
  {
    img: "/proj-imgs/bot.png",
    name: "Code Analayser Bot",
    gLink: "https://github.com/shaikhFaris/Code-Analyser-BOT",
    wLink: null,
    details:
      "A discord bot built using nodejs, mongoDB and discordjs. It also has a ranking system based on points earned by correct submissions.",
  },
];

export default projects;
