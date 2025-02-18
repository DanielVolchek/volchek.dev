import { ChevronRight } from "lucide-react";

import { ComponentWrapper } from "@/lib/types";

import { LoadOutLink } from "./LoadOutLink";

export const LinkWithArrow: ComponentWrapper<typeof LoadOutLink> = (props) => {
  const { children, ...rest } = props;

  return (
    <LoadOutLink {...rest}>
      {children}
      <span>
        <ChevronRight className="inline" size={20} />
      </span>
    </LoadOutLink>
  );
};
