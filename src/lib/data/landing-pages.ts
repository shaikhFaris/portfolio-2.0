interface LandingPagesType {
  img: string;
  name: string;
  wLink: string | null;
}

const landingPages: LandingPagesType[] = [
  {
    img: "/proj-imgs/cslive.png",
    name: "Cslive",
    wLink: "https://cs-live.netlify.app/",
  },
  {
    img: "/proj-imgs/dandoo.png",
    name: "Dandoo",
    wLink: "https://dandooo.netlify.app",
  },
  {
    img: "/proj-imgs/roh.png",
    name: "Rohum Landing Page",
    wLink: "https://rohum-landing-page.vercel.app",
  },
];

export default landingPages;
