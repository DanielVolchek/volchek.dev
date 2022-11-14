import g from "glob";
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
          I'm learning to be a developer. I'm still figuring out what field I
          want to be in. This website will be a bit like a journal of that. It's
          mostly gonna be me putting my thoughts out on paper and documenting my
          journey. Every once in a while I'm sure I'll do something interesting!
          If you want to follow along, head on over{" "}
          <Link className="underline" href="/blog" content="here" />
        </p>
      </section>
      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium">
          I'm always working on something new
        </h2>
        <p className="my-2 text-lg">
          Right now my current project (which you can follow right{" "}
          <Link href="/blog" content="here!" className="underline" />) is
          building a simple text editor in Rust, which I'll continue to upgrade
          over time with modal editing, LSP support, and much more. I can't wait
          to get started!
        </p>
      </section>
      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium">
          I've made some stuff already
        </h2>
        <Projects />
      </section>
      <section className="my-2">
        <h2 className="my-2 text-2xl font-medium">Wanna get in contact?</h2>
        <p className="my-2 text-lg">
          I'd love to hear from you! If you have any feedback, wanna work
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
