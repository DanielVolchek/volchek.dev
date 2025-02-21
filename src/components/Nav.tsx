"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { pages, usePathInfo } from "@/lib/hooks/usePathInfo";

import { NavLink } from "./StyledLink";

// This is an experiment in building a dynamic nav, which can have any number of elements added to it
// As the elements shrink from the viewport, they are added to an "expand more" list

export const Nav = () => {
  const pathInfo = usePathInfo();
  const [optimisticCurrentPage, setOptimisticCurrentPage] = useState(
    pathInfo.basePath,
  );

  useEffect(() => {
    setOptimisticCurrentPage(pathInfo.basePath);
  }, [pathInfo.basePath]);

  // const onClick = (basePath: BasePathTemplate) => {
  //   setOptimisticCurrentPage(basePath);
  // };

  const navEntryElementRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // TODO move ref down the tree into customnavlink
  // so that useElementInViewport hook can be used
  const navEntryElements = useMemo(() => {
    return Object.entries(pages).map(([href, page], i) => {
      return (
        <NavLink
          currentPage={optimisticCurrentPage === href}
          // onClick={() => onClick(href as BasePathTemplate)}
          key={href}
          href={href}
          color={page.color}
          ref={(el) => {
            navEntryElementRefs.current[i] = el;
          }}
          className={i === 0 ? "pl-0" : ""}
        >
          {page.title}
        </NavLink>
      );
    });
  }, [optimisticCurrentPage]);

  return (
    <nav className="flex flex-col gap-2">
      <div className="flex items-center gap-2">{navEntryElements}</div>
    </nav>
  );
};

//};
//
