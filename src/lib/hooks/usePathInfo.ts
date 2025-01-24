import { usePathname, useSearchParams } from "next/navigation";
import colors from "tailwindcss/colors";

export type BasePathTemplate = `/${string}`;
export const pages: {
  [key: BasePathTemplate]: { title: string; color: string };
} = {
  "/": { title: "Home", color: "#ff0000" },
  "/work": { title: "Work", color: "#00ff00" },
  "/projects": { title: "Projects", color: "#0000ff" },
  "/blog": { title: "Blog", color: "#0000ff" },
  "/contact": { title: "Contact", color: "#0000ff" },
  "/about": { title: "About", color: "#0000ff" },
};

const getBasePath = (pathname: string): BasePathTemplate =>
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
