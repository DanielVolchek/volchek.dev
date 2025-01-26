import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const Header: FC<{ children: ReactNode; className?: string }> = (
  props,
) => {
  const { children, className } = props;

  return <h2 className={cn("text-2xl", className)}>{children}</h2>;
};
