import { ReactNode } from "react";

import { ComponentWrapper } from "@/lib/types";
import { cn } from "@/lib/utils";

type asType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type PropsType = { children: ReactNode; className?: string; as?: asType };

// TODO this is a cool pattern
// Write a blog post about it?
// Also, in this case it is not worth too much, should remove it
export const Header: ComponentWrapper<asType, PropsType> = (props) => {
  const { children, className, as: Component = "h2" } = props;

  return (
    <Component className={cn("text-2xl", className)}>{children}</Component>
  );
};
