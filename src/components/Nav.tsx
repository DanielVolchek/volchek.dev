"use client";

import { BasePathTemplate, pages, usePathInfo } from "@/lib/hooks/usePathInfo";

import { ComponentWrapper } from "@/lib/types";

import { LoadOutLink } from "./LoadOutLink";
import { useEffect, useState } from "react";

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

  // TODO decide if you want to automatically show the change

  return (
    <nav className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {Object.entries(pages).map(([href, page], i) => {
          return (
            <CustomNavLink
              currentPage={optimisticCurrentPage === href}
              onClick={() => onClick(href as BasePathTemplate)}
              key={i}
              href={href}
              color={page.color}
            >
              {page.title}
            </CustomNavLink>
          );
        })}
      </div>
    </nav>
  );
};

type CustomProps = {
  currentPage: boolean;
  color: string;
};

const CustomNavLink: ComponentWrapper<typeof LoadOutLink, CustomProps> = (
  props,
) => {
  const { onClick, currentPage, color, className, ...rest } = props;

  return (
    <LoadOutLink
      {...rest}
      onClick={onClick}
      className={`px-2 py-1 text-lg transition-all duration-300 ${className} ${currentPage ? "!text-2xl text-white" : "hover:scale-125"}`}
      style={
        currentPage
          ? {
              textDecorationColor: color,
              // textShadow: `0px 0px 3px ${color}, 0px 0px 2px #fff`,
              color: `${color}`,
            }
          : undefined
      }
    />
  );
};
