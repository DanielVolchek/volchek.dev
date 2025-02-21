import { Group } from "@/components/Group";
import { LinkWithArrow } from "@/components/LinkWithArrow";
import { MainLayoutComponent } from "@/components/MainLayoutComponent";
import { fadeInCountApplier } from "@/lib/utils";

export default function Home() {
  const fadeInCounter = fadeInCountApplier();

  return (
    <MainLayoutComponent>
      <h1
        className="fade-in-element text-4xl"
        style={
          { "--fade-in": fadeInCounter.getNextCSSProp() } as React.CSSProperties
        }
      >
        Home
      </h1>

      <Group
        header={"Daniel Volchek"}
        subheader={
          <LinkWithArrow href="/about">
            Front-End Developer. Minimalist. Dreamer
          </LinkWithArrow>
        }
        increment={fadeInCounter.getNextCSSProp()}
      />

      <Group
        header={"Work Experience"}
        subheader={
          <LinkWithArrow href="/work">See where I&apos;ve worked</LinkWithArrow>
        }
        increment={fadeInCounter.getNextCSSProp()}
      />
      <Group
        header={"Projects"}
        subheader={
          <LinkWithArrow href="/projects">Check out my projects</LinkWithArrow>
        }
        increment={fadeInCounter.getNextCSSProp()}
      />
      <Group
        header={"Blog Posts"}
        subheader={<LinkWithArrow href="/blog">Read my thoughts</LinkWithArrow>}
        increment={fadeInCounter.getNextCSSProp()}
      />
      <Group
        header={"Contact Me"}
        subheader={
          <LinkWithArrow href="/contact">
            Let&apos;s work together
          </LinkWithArrow>
        }
        increment={fadeInCounter.getNextCSSProp()}
      />
    </MainLayoutComponent>
  );
}
