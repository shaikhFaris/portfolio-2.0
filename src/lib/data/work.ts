interface WorkProps {
  isWorking: boolean;
  img: string;
  title: string;
  details: string;
  date: string;
}

const work: WorkProps[] = [
  {
    isWorking: true,
    img: "/digital-creation.jpg",
    title: "NAAH SON, Dont be smart",
    details:
      "Building user experiences with functionality. Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
    date: "Dec '25 - Present",
  },
  {
    isWorking: false,
    img: "/digital-creation.jpg",
    title: "Digital Creation | Software Developer Intern",
    details:
      "Developed a frontend interface, integrated with backend. Built a system to generate dynamic urls and QR codes for company referrals.",
    date: "May '25 - June '25",
  },
  {
    isWorking: false,
    img: "/RohumLogo.png",
    title: "Rohum | Frontend Developer",
    details:
      "Designed and Developed an awesome landing page for the startup. Added GSAP/Framer animations and 3D touch using R3f. Also developed a simple email sending server.",
    date: "March '25 - May '25",
  },
];

export default work;
