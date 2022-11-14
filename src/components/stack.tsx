import reactSVG from "../images/langicons/reactjs";
import cssSVG from "../images/langicons/css";
import typescriptSVG from "../images/langicons/typescript";
import goSVG from "../images/langicons/go";
import postgresqlSVG from "../images/langicons/postgresql";
import javascriptSVG from "../images/langicons/javascript";
import tailwindSVG from "../images/langicons/tailwind";
import sassSVG from "../images/langicons/sass";
import nodejsSVG from "../images/langicons/nodejs";
import electronSVG from "../images/langicons/electron";
import nextJSSVG from "../images/langicons/nextjs";

export type Stack =
  | "react"
  | "css"
  | "go"
  | "postgresql"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "electron"
  | "nextjs"
  | "nodejs"
  | "sass";

type Props = {
  stack: Stack[];
  mousedOver: boolean;
};

export default function Stack({ stack: fullstack, mousedOver }: Props) {

  return (
    <div className="flex w-full gap-3 rounded-xl border-2 border-slate-400 p-4 hover:grayscale-0">
      {fullstack.map((stack) => (
        <StackSVG key={stack} stack={stack} mouseOver={mousedOver}/>
      ))}
    </div>
  );
}

const StackSVG = ({ stack, mouseOver }: { stack: Stack, mouseOver: boolean}) => {
  const map: { [key: string]: () => JSX.Element } = {
    react: reactSVG,
    css: cssSVG,
    typescript: typescriptSVG,
    go: goSVG,
    postgresql: postgresqlSVG,
    javascript: javascriptSVG,
    tailwind: tailwindSVG,
    sass: sassSVG,
    nodejs: nodejsSVG,
    electron: electronSVG,
    nextjs: nextJSSVG,
  };
  const el = map[stack];
  if (!el) throw new Error("Invalid stack ID");

  return (
    <span className={ `h-min w-full lg:grayscale${mouseOver ? "-0" : ""} transition-all`}>{el()}</span>
  );
};
