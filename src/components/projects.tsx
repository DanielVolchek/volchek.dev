import type { CardProps } from "./card";
import Card from "./card";
import hchat from "../images/projects/hChat.png";

const projects: CardProps[] = [
  {
    title: "hChat",
    desc: "A largescale chat app for all CUNY students",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
  },
  {
    title: "hChat",
    desc: "A largescale chat app for all CUNY students",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
  },
  {
    title: "hChat",
    desc: "A largescale chat app for all CUNY students",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
  },
  {
    title: "hChat",
    desc: "A largescale chat app for all CUNY students",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap">
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
