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
];

export default projects;
