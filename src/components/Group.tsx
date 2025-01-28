import { ChevronRight } from "lucide-react";
import { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Header } from "./Header";

type GroupProps = {
  header: ReactNode;
  subheader: ReactNode;
  content: ReactNode;
  fadeIn?: boolean;
};

export const Group: FC<GroupProps> = (props) => {
  const { header, subheader, content, fadeIn = true } = props;

  return (
    <div className={cn({ "fade-in-element": fadeIn })}>
      <Header>{header}</Header>
      <Subheader>{subheader}</Subheader>
      <div className="text-gray-400">{content}</div>
    </div>
  );
};

const Subheader: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <p className="group">
      <span className="font-mono text-lg text-gray-400 transition-transform duration-75 hover:text-red-500 group-hover:-translate-y-1 group-hover:underline">
        {children}
        <ChevronRight className="inline" />
      </span>
    </p>
  );
};
