import type { CardProps } from "./card";
import Card from "./card";
import hchat from "../images/projects/hChat.png";
import gentax from "../images/projects/gentax.png";

const projects: CardProps[] = [
  {
    title: "hChat",
    desc: "A largescale chat app for all CUNY students",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
  },
  {
    title: "SOAP",
    desc: "A largescale chat app for all CUNY students",
    img: hchat,
    longdesc: "",
    stack: ["typescript", "react", "electron", "nodejs", "sass"],
  },
  {
    title: "GenTaX",
    desc: "A largescale chat app for all CUNY students",
    img: gentax,
    longdesc: "",
    stack: ["typescript", "react", "tailwind", "electron", "nodejs"],
  },
  {
    title: "Volchek.Dev",
    desc: "A largescale chat app for all CUNY students",
    img: hchat,
    longdesc: "",
    stack: ["typescript", "react", "tailwind", "nextjs", "postgresql"],
  },
];

export default function Projects() {
  return (
    <div className="my-4 flex flex-col justify-center gap-x-8 gap-y-4 md:flex-row md:flex-wrap">
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          desc={project.desc}
          img={project.img}
          longdesc={project.longdesc}
          stack={project.stack}
        />
      ))}
    </div>
  );
}
