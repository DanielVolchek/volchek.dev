import { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Header } from "./Header";

type GroupProps = {
  header: ReactNode;
  subheader: ReactNode;
  content?: ReactNode;
  fadeIn?: boolean;
  increment: number;
};

export const Group: FC<GroupProps> = (props) => {
  const { header, subheader, content, fadeIn = true, increment } = props;

  return (
    <div
      fade-in-element={increment}
      className={cn({ "fade-in-element": fadeIn })}
      style={{ "--fade-in": increment } as React.CSSProperties}
    >
      <Header>{header}</Header>
      <Subheader>{subheader}</Subheader>
      <div className="text-gray-300">{content}</div>
    </div>
  );
};

const Subheader: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <p className="inline-block text-base text-gray-400 transition-all duration-300 hover:text-[17px] active:text-red-500">
      {children}
    </p>
  );
};
