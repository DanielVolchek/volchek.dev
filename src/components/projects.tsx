import type { CardProps } from "./card";
import Card from "./card";
import hchat from "../images/projects/hChat.png";
import gentax from "../images/projects/gentax.png";
import volchekdev from "../images/projects/volchek.dev.png";
import soap from "../images/projects/soap.png";

const projects: CardProps[] = [
  {
    title: "hChat",
    desc: "A largescale chat app for CUNY students, encompassing over 80k rooms for each class within the school system.",
    img: hchat,
    longdesc: "",
    stack: ["javascript", "react", "go", "css", "postgresql"],
  },
  {
    title: "SOAP",
    desc: "A functional tool for automating the boring task of modifying files for SEO purposes towards the end of a projects development cycle",
    img: soap,
    longdesc: "",
    stack: ["typescript", "react", "electron", "nodejs", "sass"],
  },
  {
    title: "GenTaX",
    desc: "A handy tool for comparing different code formatting styles in a markdown block",
    img: gentax,
    longdesc: "",
    stack: ["typescript", "react", "tailwind", "nextjs", "postgresql"],
  },
  {
    title: "Volchek.Dev",
    desc: "You're looking at it! My brand new dev page/blog",
    img: volchekdev,
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
