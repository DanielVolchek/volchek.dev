"use client";

import { ComponentWrapper } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type href = `/${string}`;
const pages: { [key: href]: { title: string; color: string } } = {
  "/": { title: "Home", color: "#ff0000" },
  "/work": { title: "Work", color: "#00ff00" },
  "/blog": { title: "Blog", color: "#0000ff" },
};

// TODO add code to handle "/blog/x" as is "/blog" will be marked as current page but "/blog/x" won't
export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {Object.entries(pages).map(([href, page], i) => {
        return (
          <CustomNavLink
            currentPage={pathname === href}
            key={i}
            href={href}
            color={page.color}
          >
            {page.title}
          </CustomNavLink>
        );
      })}
    </nav>
  );
};

type CustomProps = {
  currentPage: boolean;
  color: string;
};

const CustomNavLink: ComponentWrapper<typeof Link, CustomProps> = (props) => {
  const { currentPage, color, ...rest } = props;

  if (currentPage) {
    return (
      <Link
        {...rest}
        className="underline"
        style={{ color, textDecorationColor: color }}
      />
    );
  }

  return <Link {...rest} className="" />;
};
