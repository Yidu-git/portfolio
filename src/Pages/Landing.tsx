// import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
import { Link as LinkIco } from "lucide-react";

import LandingSplineImg from "../Assets/Images/Portfolio_Landing_Mobile.jpg";
import SplineLandingScene from "../Assets/Spline/SplineLanding";
import useWindowWidth from "../Hooks/useWindowWidth";

// Skills icons
import ReactLogo from "../Assets/Icons/Programing/react.svg";
import ViteLogo from "../Assets/Icons/Programing/vite.svg";
import PythonLogo from "../Assets/Icons/Programing/python.svg";
import MySQLLogo from "../Assets/Icons/Programing/MySQL.svg";
import JSLogo from "../Assets/Icons/Programing/JS.svg";
import TSLogo from "../Assets/Icons/Programing/TS.svg";
import BlenderLogo from "../Assets/Icons/Programing/blender.svg";
import TailwindcssLogo from "../Assets/Icons/Programing/Tailwind.svg";
import FigmaLogo from "../Assets/Icons/Programing/Figma.svg";
import SplineLogo from "../Assets/Icons/Programing/Spline.png";

type skill = { name: string; icon: string; class: string };
const ProgramingSkills: skill[] = [
  {
    name: "TypeScript",
    icon: TSLogo,
    class: "p-0! bg-[#007acc]!",
  },
  {
    name: "JavaScript",
    icon: JSLogo,
    class: "p-0! bg-[#f0db4f]!",
  },
  {
    name: "Python",
    icon: PythonLogo,
    class: "",
  },
  {
    name: "MySQL",
    icon: MySQLLogo,
    class: "bg-neutral-800!",
  },
  {
    name: "React",
    icon: ReactLogo,
    class: "spin-animation bg-transparent",
  },
];

const DesignSkills: skill[] = [
  {
    name: "Figma",
    icon: FigmaLogo,
    class: "",
  },
  {
    name: "Blender",
    icon: BlenderLogo,
    class: "",
  },
  {
    name: "Spline",
    icon: SplineLogo,
    class: "",
  },

  {
    name: "Tailwindcss",
    icon: TailwindcssLogo,
    class: "",
  },
];

const skills: Record<string, skill> = {
  Figma: {
    name: "Figma",
    icon: FigmaLogo,
    class: "",
  },
  Blender: {
    name: "Blender",
    icon: BlenderLogo,
    class: "",
  },
  Spline: {
    name: "Spline",
    icon: SplineLogo,
    class: "",
  },
  Tailwind: {
    name: "Tailwindcss",
    icon: TailwindcssLogo,
    class: "",
  },
  TypeScript: {
    name: "TypeScript",
    icon: TSLogo,
    class: "p-0! bg-[#007acc]!",
  },
  JavaScript: {
    name: "JavaScript",
    icon: JSLogo,
    class: "p-0! bg-[#f0db4f]!",
  },
  vite: {
    name: "Vite",
    icon: ViteLogo,
    class: "",
  },
  Python: {
    name: "Python",
    icon: PythonLogo,
    class: "",
  },
  MySQL: {
    name: "MySQL",
    icon: MySQLLogo,
    class: "bg-neutral-800!",
  },
  React: {
    name: "React",
    icon: ReactLogo,
    class: "bg-transparent",
  },
};

const skillsMap = (skills: skill[]) => {
  return skills.map((skill) => (
    <div className="flex h-fit w-fit flex-col rounded-md bg-white shadow-md transition-all duration-150 hover:shadow-lg">
      <img
        src={skill.icon}
        alt=""
        className={
          "h-25 w-25 rounded-md bg-transparent p-5 md:h-40 md:w-40 " +
          skill.class
        }
      />
      <h1 className="w-full py-2 text-center text-lg font-bold md:text-2xl">
        {skill.name}
      </h1>
    </div>
  ));
};

const techstackMap = (stack: string[]) => {
  return stack.map((tech) => {
    const Tech = skills[tech];
    console.log(Tech, tech);
    if (Tech !== undefined)
      return (
        <div className="flex flex-col items-center justify-center rounded-sm">
          <img
            src={Tech.icon ? Tech.icon : ""}
            alt=""
            className={
              "h-27 w-27 rounded-md bg-transparent p-5 md:h-25 md:w-25 " +
              (Tech.class ? Tech.class : "")
            }
          />
          <p className="text-center">{Tech.name}</p>
        </div>
      );
  });
};

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
  techStack: string[];
  // techStack: skill[];
};
const WebDevProjects: Project[] = [
  {
    title: "Grade manager",
    description: `A grade management and analysis system that allows students to track their grades. This project gave me the opportunity to learn about database design, security, UI/UX and how a webapp works.`,
    image: "",
    techStack: ["Vite", "React", "JavaScript", "MySQL", "Tailwind"],
  },
  {
    title: "Garden Atlas",
    description: `...`,
    link: "https://yidu-git.github.io/garden-atlas-website",
    image: "",
    techStack: ["Vite", "React", "TypeScript", "Tailwind"],
  },
];

const projectMap = (projects: Project[]) => {
  return projects.map(({ title, description, link, techStack }) => (
    <div className="flex w-full flex-col gap-2 rounded-md border px-4 py-5 md:px-8">
      <div className="flex flex-col items-start justify-center gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="font-jbm mb-2 justify-self-start text-3xl md:text-4xl">
          {title}
        </h1>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="sm:button-lg button-outline gap-3 font-medium">
              <Link2 size={25} className="md:w-5" />
              Visit site
            </button>
          </a>
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-normal">Techstack:</h3>
        <div className="flex flex-row flex-wrap gap-2 md:gap-4">
          {techstackMap(techStack)}
        </div>
      </div>
    </div>
  ));
};

const LandingPage = () => {
  const width = useWindowWidth();

  return (
    <div className="flex flex-col">
      <section id="hero">
        <div className="items-cener relative z-100 flex justify-center bg-white bg-fixed px-5 py-70 md:px-20">
          {width > 760 ? (
            <SplineLandingScene />
          ) : (
            <div className="smb-container">
              <img
                className="spline-mobile-background"
                src={LandingSplineImg}
                alt="landing background"
              />
            </div>
          )}
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-[1.5rem] bg-transparent px-5 py-10 backdrop-blur-md md:px-20 md:py-10">
            <h1 className="text-4xl font-bold text-white">
              Designing what looks{" "}
              <span className="text-primary-500">good</span>,
              <br />
              Building what <span className="text-secondary-500">works</span>.
            </h1>
            <button className="button-xl mt-8 flex flex-row items-center justify-center gap-2">
              Get in touch
              <LinkIco size={25} />
            </button>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex h-fit w-full flex-col items-center justify-center gap-5 bg-white px-10 py-15 shadow-[5px_0px_15px_-8px_#00000090]">
          <h1 className="font-jbm mb-10 text-5xl font-bold">Skills</h1>
          <h3 className="text-3xl">Programing</h3>
          <div className="flex flex-row flex-wrap justify-center gap-5 gap-y-3 md:gap-10 md:gap-y-5">
            {skillsMap(ProgramingSkills)}
          </div>
          <h3 className="text-3xl">Design</h3>
          <div className="flex flex-row flex-wrap justify-center gap-5 gap-y-3 md:gap-10 md:gap-y-5">
            {skillsMap(DesignSkills)}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="flex h-fit w-full flex-col items-center justify-center gap-5 bg-white px-10 py-15">
          <h1 className="font-jbm mb-10 text-5xl font-bold">Projects</h1>
          <div className="flex w-full flex-col gap-4 px-4 md:px-8">
            {projectMap(WebDevProjects)}
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex h-fit w-full flex-col gap-5 bg-white px-10 py-15 shadow-[5px_0px_15px_-8px_#00000090] md:px-50">
          <h1 className="font-jbm mb-10 self-center justify-self-center text-5xl font-bold">
            About me
          </h1>
          <p>
            I am a full stack developer and designer who is passionate about
            math, science, computer science and design. I have worked on
            projects involving both web design and 3D rendering.
            <br />
            <br />
            My passion for math and computer science has led me to discovering
            the connections between the technologies in our everyday lives. I
            personally believe that anyone who wants to do anything related to
            programing or CS, they should start with math.
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="flex h-fit w-full flex-col gap-1 bg-neutral-800 px-10 py-15 text-white md:px-50">
          <h1 className="font-jbm mb-10 self-center justify-self-center text-5xl font-bold">
            Contact
          </h1>
          <p>
            Email :
            <a href="mailto:yidumandefro@gmail.com"> yidumandefro@gmail.com</a>
          </p>
          <p>LinkedIn : yidumandefro@gmail.com</p>
          <p>Github : github.com/yidu-git</p>
          <p>Email : yidumandefro@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
