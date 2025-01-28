import { ChevronRight } from "lucide-react";
import { FC, ReactNode, useRef } from "react";

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

  const ref = useRef<HTMLSpanElement>(null);

  const onClick = () => {
    ref.current?.classList.add("text-red-500");
    setTimeout(() => {
      ref.current?.classList.remove("text-red-500");
    }, 500);
  };

  return (
    <p className="group">
      <span
        onClick={onClick}
        ref={ref}
        className="text-base text-gray-400 transition-all duration-300 hover:text-lg"
      >
        {children}
        <ChevronRight className="inline" size={20} />
      </span>
    </p>
  );
};
