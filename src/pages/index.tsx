import { type NextPage } from "next";
import Head from "next/head";
import Link from "../components/link";
import Projects from "../components/projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Volchek.Dev</title>
      </Head>
      <h1 className="my-2 text-5xl font-semibold md:text-4xl">Hey!👋</h1>
      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium">
          My name is{" "}
          <Link href="/about" content="Daniel" className="underline" /> :)
        </h2>
        <p className="my-2 text-lg">
          I&apos;m learning to be a developer. I&apos;m still figuring out what
          field I want to be in. This website will be a bit like a journal of
          that. It&apos;s mostly gonna be me putting my thoughts out on paper
          and documenting my journey. Every once in a while I&apos;m sure
          I&apos;ll do something interesting! If you want to follow along, head
          on over <Link className="underline" href="/blog" content="here" />
        </p>
      </section>
      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium">
          I&apos;m always working on something new
        </h2>
        <p className="my-2 text-lg">
          Right now my current project (which you can follow right{" "}
          <Link href="/blog" content="here!" className="underline" />) is
          building a simple text editor in Rust, which I&apos;ll continue to
          upgrade over time with modal editing, LSP support, and much more. I
          can&apos;t wait to get started!
        </p>
      </section>
      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium">
          I&apos;ve made some stuff already
        </h2>
        <Projects />
      </section>
      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium">Wanna get in contact?</h2>
        <p className="my-2 text-lg">
          I&apos;d love to hear from you! If you have any feedback, wanna work
          together, or just wanna chat... shoot me an email over{" "}
          <Link
            href="mailto:daniel@volchek.dev?subject=Hi!"
            content="here!"
            className="underline"
          />
        </p>
        {/* <EmailForm /> */}
      </section>
    </>
  );
};

export default Home;
