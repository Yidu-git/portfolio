// import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
// Landing page

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

const LandingPage = () => {
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
      <section
        id="hero"
        className="linegrid-lg grid-animated flex items-center justify-center bg-fixed py-42"
      >
        <div className="flex h-fit w-fit flex-col items-center justify-center rounded-lg bg-white px-10 py-10 shadow-xl">
          <h1 className="text-4xl font-bold">
            Designing what looks <span className="text-primary-500">good</span>,
            <br />
            Building what <span className="text-secondary-500">works</span>.
          </h1>
          <button className="button button-big mt-8">Get in touch</button>
        </div>
      </section>
      <section id="projects">
        <div className="flex h-300 w-full flex-col gap-5 bg-white px-10 py-15 shadow-[5px_0px_15px_-8px_#00000090]">
          <h1 className="mb-3 text-3xl">Projects</h1>
          <div className="border-primary-300 flex flex-col gap-5 rounded-xl border px-6 py-4 shadow-[0px_10px_15px_-10px_#00000030] transition-all duration-150 ease-in-out hover:shadow-[0px_15px_20px_-10px_#00000030] md:flex-row">
            <div className="w-full">
              <h2 className="mb-5 text-2xl font-bold">Grade manager</h2>
              <p className="text-neutral-800">
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
      </section>
    </div>
  );
};

export default LandingPage;
