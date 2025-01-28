import { ElementType, FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

export const Header: FC<{ children: ReactNode; className?: string }> = (
  props,
) => {
  const { children, className } = props;

  return <h2 className={cn("text-2xl", className)}>{children}</h2>;
};
