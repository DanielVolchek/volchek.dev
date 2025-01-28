"use client";

import { Group } from "@/components/Group";
import { IconGroup } from "@/components/IconGroup";
import { LoadOutLink } from "@/components/LoadOutLink";
import { MainLayoutComponent } from "@/components/MainLayoutComponent";

export default function Home() {
  return (
    <MainLayoutComponent>
      <h1 className="fade-in-element text-4xl">Home</h1>

      <Group
        header={"Daniel Volchek"}
        subheader={"Front-End Developer. Minimalist. Dreamer"}
        content={undefined}
      />

      <Group
        header={"Work Experience"}
        subheader={
          <LoadOutLink href="/work">See where I&apos;ve worked</LoadOutLink>
        }
        content={undefined}
      />
      <Group
        header={"Projects"}
        subheader={
          <LoadOutLink href="/projects">Check out my projects</LoadOutLink>
        }
        content={undefined}
      />
      <Group
        header={"Blog Posts"}
        subheader={"Read my thoughts"}
        content={undefined}
      />
      <Group
        header={"Contact Me"}
        subheader={"Let's work together"}
        content={
          <>
            <IconGroup size="md" />
          </>
        }
      />
    </MainLayoutComponent>
  );
}
