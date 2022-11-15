import type { NextPage } from "next";
import Head from "next/head";
import Link from "../components/link";
import Projects from "../components/projects";
import Section from "../components/section";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Volchek.Dev</title>
      </Head>
      <h1 className="my-2 text-5xl font-semibold md:text-4xl">Hey!👋</h1>
      <h2 className="text-2xl">What&apos;s the deal???</h2>
      <article className="pl-4">
        <Section
          header={
            <>
              I&apos;m{" "}
              <Link href="/about" content="Daniel" className="underline" /> :)
              This is my blog
            </>
          }
          p={
            <>
              I&apos;m learning to be a developer. I&apos;m still figuring out
              what field I want to be in. This website will be a bit like a
              journal of that. It&apos;s mostly gonna be me putting my thoughts
              out on paper and documenting my journey. Every once in a while
              I&apos;m sure I&apos;ll do something interesting! If you want to
              follow along, head on over{" "}
              <Link className="underline" href="/blog" content="here" />
            </>
          }
        />
      </article>
      <h2 className="text-2xl">What kind of stuff have you worked on?</h2>
      <article className="pl-4">
        <Section
          header={<>I&apos;m always working on something new</>}
          p={
            <>
              Right now my current project (which you can follow right{" "}
              <Link href="/blog" content="here!" className="underline" />) is
              building a simple text editor in Rust, which I&apos;ll continue to
              upgrade over time with modal editing, LSP support, and much more.
              I can&apos;t wait to get started!
            </>
          }
        />
      </article>

      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium"></h2>
        <p className="my-2 text-lg"></p>
      </section>
      <article className="my-2">
        <h2 className="pl-4 text-xl">I&apos;ve made some stuff already</h2>
        <Projects />
      </article>
      <article className="my-2 pl-4">
        <h2 className="text-2xl font-medium">Wanna get in contact?</h2>
        <Section
          header={"Email me!"}
          p={
            <>
              I&apos;d love to hear from you! If you have any feedback, wanna
              work together, or just wanna chat... shoot me an email over{" "}
              <Link
                href="mailto:daniel@volchek.dev?subject=Hi!"
                content="here!"
                className="underline"
              />
            </>
          }
        />
      </article>
    </>
  );
};

export default Home;
