"use client";

import { BasePathTemplate, pages, usePathInfo } from "@/lib/hooks/usePathInfo";

import { ComponentWrapper } from "@/lib/types";

import { LoadOutLink } from "./LoadOutLink";
import { useEffect, useMemo, useRef, useState } from "react";
import { isElementFullyInViewport } from "@/lib/hooks/useElementInViewport";

export const Nav = () => {
  const pathInfo = usePathInfo();
  const [optimisticCurrentPage, setOptimisticCurrentPage] = useState(
    pathInfo.basePath,
  );

  useEffect(() => {
    setOptimisticCurrentPage(pathInfo.basePath);
  }, [pathInfo.basePath]);

  const onClick = (basePath: BasePathTemplate) => {
    setOptimisticCurrentPage(basePath);
  };

  const navEntryElementRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // TODO move ref down the tree into customnavlink
  // so that useElementInViewport hook can be used
  const navEntryElements = useMemo(() => {
    return Object.entries(pages).map(([href, page], i) => {
      return (
        <CustomNavLink
          currentPage={optimisticCurrentPage === href}
          onClick={() => onClick(href as BasePathTemplate)}
          key={i}
          href={href}
          color={page.color}
          ref={(el) => {
            navEntryElementRefs.current[i] = el;
          }}
        >
          {page.title}
        </CustomNavLink>
      );
    });
  }, [optimisticCurrentPage]);

  useEffect(() => {
    console.log(navEntryElementRefs.current);

    for (const el of navEntryElementRefs.current) {
      console.log(isElementFullyInViewport(el!));
    }
  }, [navEntryElements]);

  return (
    <nav className="flex flex-col gap-2">
      <div className="flex items-center gap-2">{navEntryElements}</div>
    </nav>
  );
};

type CustomProps = {
  currentPage: boolean;
};

const CustomNavLink: ComponentWrapper<typeof LoadOutLink, CustomProps> = (
  props,
) => {
  const { onClick, currentPage, className, ...rest } = props;

  return (
    <LoadOutLink
      {...rest}
      onClick={onClick}
      className={`px-2 py-1 text-base transition-all duration-300 ${className ? className : ""} ${currentPage ? "!text-lg text-red-500" : "hover:text-lg"}`}
      style={
        currentPage
          ? {
              // textDecorationColor: color,
              // // textShadow: `0px 0px 3px ${color}, 0px 0px 2px #fff`,
              // color: `${color}`,
            }
          : undefined
      }
    />
  );
};
//
