import { FC, useMemo } from "react";

import { ComponentWrapper } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Group } from "./Group";

type Companies = "Clover" | "Heartbeat" | "Hunter_College" | "Freelance";

type SubCategory = string;

type BulletPoints = string[] | Record<SubCategory, string[]>;

type WorkType = {
  title: string;
  companyName: string;
  dateString: string;
  bulletPoints: BulletPoints;
};

type PropsType = {
  work: WorkType;
};

const WorkMap: Record<Companies, WorkType> = {
  Freelance: {
    title: "Freelance web developer",
    companyName: "Self-Employed",
    dateString: "Sep 2024 - Present",
    bulletPoints: [],
  },
  Clover: {
    title: "Frontend Engineer",
    companyName: "Fiserv/Clover",
    dateString: "Jan 2023 - May 2024",
    bulletPoints: {
      "Internal Tools Platform": [
        "Played a key role in developing and iterating on a novel micro-frontend architecture, growing from implementation to co-ownership responsibilities. Micro-frontend platform supports highly independent tool development from different teams through one centrally accessible platform with legacy support.",
        "Served as primary technical contact for stakeholders adopting the micro-frontend platform, guiding integration and assisting with code migration where teams lacked ReactJS expertise.",
        "Built custom libraries to fill redux/messaging and common functionality needs in internal tools platform, prioritizing first-class TypeScript support and technical documentation to assist developer adoption.",
        "Migrated multiple legacy AngularJS apps to ReactJS micro-frontend apps, resulting in significant performance improvements as well as furthering platform adoption.",
      ],
      "Reseller Support App": [
        "Spearheaded development of Multi-Factor Authentication management tools for third-party (reseller) support teams, resulting in a significant decrease in volume of tickets elevated to internal Clover support.",
        "Developed user interfaces supporting an evolving billing system, as well as maintaining backwards compatibility for legacy and hybrid billing customers.",
        "Utilized Material UI to implement responsive designs from Figma, collaborating with stakeholders and design teams to iterate and improve UI/UX for end-users.",
      ],
    },
  },
  Heartbeat: {
    title: "Frontend Engineering Intern",
    companyName: "Publicis Health/Heartbeat Ideas",
    dateString: "June 2022 - September 2022",
    bulletPoints: [
      "Collaborated with a senior mentor to develop SOAP, a custom tool which grooms SEO and accessibility across project resources before marketing websites go live, reducing the process from days to hours.",
      "Developed emails using HTML and CSS for pharmaceutical marketing campaigns.",
      "Assisted with minor bug fixes and code changes across several pharmaceutical marketing websites.",
    ],
  },
  Hunter_College: {
    title: "CS Teachers Assistant",
    companyName: "CUNY Hunter College",
    dateString: "September 2021 - June 2022",
    bulletPoints: [
      "Assisted in preparing and delivering computer science lectures and coursework at CUNY Hunter College, enhancing students' skills and understanding.",
      "Provided tutoring support that significantly improved students' comprehension of key computer science concepts.",
      "Contributed to grading assignments and exams, ensuring fair and timely evaluations while upholding the academic integrity of the course.",
    ],
  },
} as const;

export const WorkExperienceGroup: FC = () => {
  return (
    <>
      {Object.entries(WorkMap).map(([key, value]) => (
        <WorkSection key={key} work={value} className="mb-8" />
      ))}
    </>
  );
};

const WorkSection: ComponentWrapper<"li", PropsType> = (props) => {
  const { work, className, ...rest } = props;

  // <li className={cn(className, "fade-in-element")} {...rest}>
  //   <div className="fade-in-element">
  //     <h2 className="">{work.title}</h2>
  //     <h3>{work.companyName}</h3>
  //     <p>{work.dateString}</p>
  //   </div>
  //   <WorkDescription bulletPoints={work.bulletPoints} />
  // </li>

  return (
    <Group
      header={work.companyName}
      subheader={work.title}
      content={
        <>
          <p>{work.dateString}</p>
          <WorkDescription bulletPoints={work.bulletPoints} />
        </>
      }
    />
  );
};

type WorkDescriptionProps = {
  bulletPoints: BulletPoints;
};

const BulletPointUl: ComponentWrapper<"ul"> = (props) => {
  const { className, ...rest } = props;

  return (
    <ul className={cn("fade-in-element list-disc pl-8", className)} {...rest} />
  );
};

const WorkDescription: FC<WorkDescriptionProps> = ({ bulletPoints }) => {
  const renderSimpleList = (points: string[]) => (
    <BulletPointUl>
      {points.map((point) => (
        <li className="fade-in-element" key={point}>
          {point}
        </li>
      ))}
    </BulletPointUl>
  );

  const renderCategorizedList = (
    categorizedPoints: Record<string, string[]>,
  ) => (
    <div>
      {Object.entries(categorizedPoints).map(([category, points]) => (
        <section key={category} className="fade-in-element">
          <h3 className="fade-in-element">{category}</h3>
          {renderSimpleList(points)}
        </section>
      ))}
    </div>
  );

  return Array.isArray(bulletPoints)
    ? renderSimpleList(bulletPoints)
    : renderCategorizedList(bulletPoints);
};
