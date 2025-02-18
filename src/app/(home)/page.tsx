import { Group } from "@/components/Group";
import { LinkWithArrow } from "@/components/LinkWithArrow";
import { MainLayoutComponent } from "@/components/MainLayoutComponent";

export default function Home() {
  return (
    <MainLayoutComponent>
      <h1 className="fade-in-element text-4xl">Home</h1>

      <Group
        header={"Daniel Volchek"}
        subheader={
          <LinkWithArrow href="/about">
            Front-End Developer. Minimalist. Dreamer
          </LinkWithArrow>
        }
      />

      <Group
        header={"Work Experience"}
        subheader={
          <LinkWithArrow href="/work">See where I&apos;ve worked</LinkWithArrow>
        }
      />
      <Group
        header={"Projects"}
        subheader={
          <LinkWithArrow href="/projects">Check out my projects</LinkWithArrow>
        }
      />
      <Group
        header={"Blog Posts"}
        subheader={<LinkWithArrow href="/blog">Read my thoughts</LinkWithArrow>}
      />
      <Group
        header={"Contact Me"}
        subheader={
          <LinkWithArrow href="/contact">
            Let&apos;s work together
          </LinkWithArrow>
        }
      />
    </MainLayoutComponent>
  );
}
