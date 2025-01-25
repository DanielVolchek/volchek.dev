import { usePathname, useSearchParams } from "next/navigation";

export type BasePathTemplate = `/${string}`;
export const pages: {
  [key: BasePathTemplate]: { title: string; color: string };
} = {
  "/": { title: "Home", color: "hsl(0,100%,70%)" },
  "/work": { title: "Work", color: "hsl(0,100%,70%)" },
  "/projects": { title: "Projects", color: "hsl(0,100%,70%)" },
  "/blog": { title: "Blog", color: "hsl(0,100%,70%)" },
  "/contact": { title: "Contact", color: "hsl(0,100%,70%)" },
  "/about": { title: "About", color: "hsl(0,100%,70%)" },
};

export const getBasePath = (pathname: string): BasePathTemplate =>
  `/${pathname.split("/")[1]}`;

export const usePathInfo = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const basePath = getBasePath(pathname);
  const pageProps = pages[basePath];

  return {
    pathname,
    searchParams,
    basePath,
    pageProps,
    fullPath: `${pathname}?${searchParams}`,
  };
};
