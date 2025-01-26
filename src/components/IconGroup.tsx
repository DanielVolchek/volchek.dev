import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

import { ComponentWrapper } from "@/lib/types";
import { cn } from "@/lib/utils";

const SIZE_MAP = {
  sm: 20,
  md: 30,
  lg: 64,
} as const;

const IconLink: ComponentWrapper<typeof Link> = (props) => {
  const { ...rest } = props;

  return (
    <Link
      href={rest.href}
      target={rest.target}
      rel={rest.rel}
      className={cn(
        rest.className,
        `hover-icon text-gray-400 transition-colors hover:text-red-500`,
      )}
    >
      {rest.children}
    </Link>
  );
};

type IconGroupProps = {
  size: "sm" | "md" | "lg";
};

export const IconGroup: FC<IconGroupProps> = (props) => {
  const { size = "sm" } = props;

  return (
    <div
      className={cn("flex items-center", {
        "gap-2": size === "sm",
        "gap-4": size === "md",
        "gap-16": size === "lg",
      })}
    >
      <IconLink
        href="https://linkedin.com/in/danielvolchek"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={SIZE_MAP[size]} />
      </IconLink>
      <IconLink
        href="https://linkedin.com/in/danielvolchek"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={SIZE_MAP[size]} />
      </IconLink>
      <IconLink href="mailto:daniel@volchek.dev">
        <Mail size={SIZE_MAP[size]} />
      </IconLink>
      <IconLink href="/resume.pdf">
        <FileText size={SIZE_MAP[size]} />
      </IconLink>
    </div>
  );
};
