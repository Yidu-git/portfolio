// import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
import { Link as LinkIco } from "lucide-react";

import LandingSplineImg from "../Assets/Images/Portfolio_Landing_Mobile.jpg";
import SplineLandingScene from "../Assets/Spline/SplineLanding";
import useWindowWidth from "../Hooks/useWindowWidth";

// Skills icons
import ReactLogo from "../Assets/Icons/Programing/react.svg";
import PythonLogo from "../Assets/Icons/Programing/python.svg";
import MySQLLogo from "../Assets/Icons/Programing/MySQL.svg";
import JSLogo from "../Assets/Icons/Programing/JS.svg";
import TSLogo from "../Assets/Icons/Programing/TS.svg";
import SplineLogo from "../Assets/Icons/Programing/Spline.png";

type tech = string | "" | "" | "";
const techImg: Record<tech, string> = {
  "": "",
};
const techColor: Record<tech, string> = {
  //   TypeScript: "#0000ff",
  //   ReactJS: "#01d1dd",
  //   MySQL: "#f5d8d8",
  //   JavaScript: "#eeee00",
};

type skill = { skill: string; icon: string; class: string };
const ProgramingSkills: skill[] = [
  {
    skill: "TypeScript",
    icon: TSLogo,
    class: "p-0! bg-[#007acc]!",
  },
  {
    skill: "JavaScript",
    icon: JSLogo,
    class: "p-0! bg-[#f0db4f]!",
  },
  {
    skill: "Python",
    icon: PythonLogo,
    class: "",
  },
  {
    skill: "MySQL",
    icon: MySQLLogo,
    class: "bg-neutral-800!",
  },
  {
    skill: "React",
    icon: ReactLogo,
    class: "spin-animation bg-transparent",
  },
];

const DesignSkills: skill[] = [
  {
    skill: "Figma",
    icon: MySQLLogo,
    class: "bg-neutral-800!",
  },
  {
    skill: "Blender",
    icon: MySQLLogo,
    class: "bg-neutral-800!",
  },
  {
    skill: "Spline",
    icon: SplineLogo,
    class: "",
  },
];

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
        {skill.skill}
      </h1>
    </div>
  ));
};

const LandingPage = () => {
  const width = useWindowWidth();

  const techStackMap = (stack: tech[]) => {
    return stack.map((tech, i) => (
      <div key={tech + i}>
        <img src={techImg[tech]} alt="" />
        <p style={{ color: techColor[tech] }}>{tech}</p>
      </div>
    ));
  };
  return (
    <div className="flex flex-col">
      <section id="hero">
        <div className="items-cener relative z-100 flex justify-center bg-fixed px-5 py-70 md:px-20">
          {width > 560 ? (
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
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {skillsMap(ProgramingSkills)}
          </div>
          <h3 className="text-3xl">Design</h3>
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {skillsMap(DesignSkills)}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="flex h-fit w-full flex-col items-center justify-center gap-5 bg-white px-10 py-15">
          <h1 className="font-jbm mb-10 text-5xl font-bold">Projects</h1>
          <div className="border-primary-300 flex flex-col gap-5 rounded-xl border px-6 py-4 shadow-[0px_10px_15px_-10px_#00000030] transition-all duration-150 ease-in-out hover:shadow-[0px_15px_20px_-10px_#00000030] md:flex-row">
            <div className="w-full">
              <h2 className="font-md mb-5 text-2xl">Grade manager</h2>
              <p className="text-neutral-700">
                A grade management and analysis system that allows students to
                track their grades. This project gave me the opportunity to
                learn about database design, security, UI/UX and how a webapp
                works.
              </p>
              <p className="mt-8 font-bold">Tech stack:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {techStackMap([
                  "JavaScript",
                  "ReactJS",
                  "TypeScript",
                  "MySQL",
                  "Vite",
                ])}
              </div>
            </div>
            <div className="mt-8 w-full md:mt-0">
              <img src="" alt="project image" />
              <h1>Image on the way</h1>
            </div>
          </div>
          <div className="border-primary-300 flex flex-col gap-5 rounded-xl border px-6 py-4 shadow-[0px_10px_15px_-10px_#00000030] transition-all duration-150 ease-in-out hover:shadow-[0px_15px_20px_-10px_#00000030] md:flex-row">
            <div className="w-full">
              <div className="flex flex-row items-center justify-between">
                <h2 className="mb-5 text-2xl font-bold">Garden atlas</h2>
                <a
                  href="https://yidu-git.github.io/garden-atlas-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button-outline gap-2">
                    <Link2 size={16} />
                    Visit site
                  </button>
                </a>
              </div>
              <p className="text-neutral-800">
                As a project for a greenathon, Garden atlas was born. This
                project was a testiment to our teams hardwork and resilience. It
                was also a great way to meet people intrested in design.
              </p>
              <p className="mt-8 font-bold">Tech stack:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {techStackMap([
                  "JavaScript",
                  "ReactJS",
                  "TypeScript",
                  "TailwindCSS",
                  "Vite",
                ])}
              </div>
            </div>
            <div className="mt-8 w-full overflow-hidden rounded-2xl p-0 md:mt-0">
              <iframe
                src="https://yidu-git.github.io/garden-atlas-website"
                title="description"
                width="100%"
                height="500px"
              ></iframe>
              .
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex h-300 w-full flex-col gap-5 bg-white px-10 py-15 shadow-[5px_0px_15px_-8px_#00000090]">
          <h1 className="mb-3 text-3xl">About me</h1>
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
    </div>
  );
};

export default LandingPage;
