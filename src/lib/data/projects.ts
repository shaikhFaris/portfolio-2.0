interface ProjectType {
  img: string;
  name: string;
  gLink?: string;
  wLink: string | null;
  details: string;
  tag: "product" | "adv backend";
}

const projects: ProjectType[] = [
  {
    img: "/proj-imgs/unuzed.png",
    name: "Unuzed",
    wLink: "https://unuzed.fun",
    details:
      "Unuzed lets you turn unused AI credits into shipped work. Spend your expiring credits helping someone else finish a task.",
    tag: "product",
  },
  {
    img: "/proj-imgs/accifio.png",
    name: "Accifio",
    wLink: "https://accifio.xyz",
    details:
      "Accifio lets you build and deploy a beautiful personal website designed by the best design engineers, in minutes. Just add your data and go live.",
    tag: "product",
  },
  {
    img: "/proj-imgs/sms.png",
    name: "SMS Campaign Processing System",
    gLink: "https://github.com/shaikhFaris/sms-campaign-processing-system",
    wLink: null,
    details:
      "Async CSV campaign processing pipeline with live WebSocket progress, and crash-resumable jobs, plus a distributed Redis rate limiter.",
    tag: "adv backend",
  },
  {
    img: "/proj-imgs/prop.png",
    name: "Proplance",
    gLink: "https://github.com/shaikhFaris/proplance",
    wLink: "https://proplance.vercel.app",
    details:
      "A freelance proposal builder that lets users quickly create, and download professional proposals as PDFs to close clients faster.",
    tag: "product",
  },
  {
    img: "/proj-imgs/yami.png",
    name: "Yami UI",
    gLink: "https://github.com/shaikhFaris/yami-ui",
    wLink: "https://yami-ui.vercel.app",
    details:
      "React shader background components right out of the box to add some seriously cool vibes to your website.",
    tag: "product",
  },
  // {
  //   img: "/proj-imgs/bb.png",
  //   name: "Binary Blogs",
  //   gLink: "https://github.com/shaikhFaris/Binary_Blogs",
  //   wLink: "https://binary-blogs-ten.vercel.app",
  //   details:
  //     "A cool and minimal website for blogging, distraction free. Built using MERN stack with JWT authentication. Also has a cool landing page.",
  //   tag: "product",
  // },
  // {
  //   img: "/proj-imgs/bot.png",
  //   name: "Code Analayser Bot",
  //   gLink: "https://github.com/shaikhFaris/Code-Analyser-BOT",
  //   wLink: null,
  //   details:
  //     "A discord bot built using nodejs, mongoDB and discordjs. It also has a ranking system based on points earned by correct submissions.",
  // },
];

export default projects;
