import reactSVG from "../images/langicons/reactjs";
import cssSVG from "../images/langicons/css";
import typescriptSVG from "../images/langicons/typescript";
import goSVG from "../images/langicons/go";
import postgresqlSVG from "../images/langicons/postgresql";
import javascriptSVG from "../images/langicons/javascript";
import tailwindSVG from "../images/langicons/tailwind";
import sassSVG from "../images/langicons/sass";

export type Stack =
  | "react"
  | "css"
  | "go"
  | "postgresql"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "sass";

type Props = {
  stack: Stack[];
};

export default function Stack({ stack: fullstack }: Props) {
  return (
    <div className="border-2 rounded-xl border-slate-400 flex w-full gap-3 p-4 hover:grayscale-0">
      {fullstack.map((stack) => (
        <StackSVG key={stack} stack={stack} />
      ))}
    </div>
  );
}

const StackSVG = ({ stack }: { stack: Stack }) => {
  const map: { [key: string]: () => JSX.Element } = {
    react: reactSVG,
    css: cssSVG,
    typescript: typescriptSVG,
    go: goSVG,
    postgresql: postgresqlSVG,
    javascript: javascriptSVG,
    tailwind: tailwindSVG,
    sass: sassSVG,
  };
  const el = map[stack];
  if (!el) throw new Error("Invalid stack ID");

  return (
    <span className="h-min w-full hover:grayscale-0 lg:grayscale">{el()}</span>
  );
};
