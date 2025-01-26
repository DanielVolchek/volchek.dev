import { ComponentWrapper } from "@/lib/types";
import { cn } from "@/lib/utils";

import { LoadOutLink } from "./LoadOutLink";

type PropsType = {
  currentPage: boolean;
};

export const NavLink: ComponentWrapper<typeof StyledLink, PropsType> = (
  props,
) => {
  const { currentPage, className, ...rest } = props;

  return (
    <StyledLink
      {...rest}
      className={cn(
        className,
        currentPage ? "!text-lg text-red-500" : "hover:text-lg",
      )}
    />
  );
};

export const StyledLink: ComponentWrapper<typeof LoadOutLink> = (props) => {
  const { className, ...rest } = props;

  return (
    <LoadOutLink
      {...rest}
      className={cn(
        "px-2 py-1 text-base text-gray-400 transition-all duration-300",
        className,
      )}
    />
  );
};
