import { type NextPage } from "next";
import Head from "next/head";
import Link from "../components/link";
import Nav from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Volchek.Dev - Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <body className="mx-8 mt-6 font-mono font-medium md:mx-32 lg:mx-64 xl:mx-96" />
      </Head>

      <Nav />
      <main className="my-8">
        <section className="my-8">
          <h1 className="mb-6 mt-2 text-5xl font-semibold md:text-4xl">
            Hey! 👋
          </h1>
          <h2 className="text-3xl font-medium">
            My name is <Link href="/about" content="Daniel" /> :)
          </h2>
          <p className="pt-2">
            I'm learning to be a developer. I've got just enough experience to
            make it fun to watch me learn, but not too much that I'm not really
            learning...
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-3xl font-medium">
            I've made a few things already
          </h2>
        </section>
      </main>
    </>
  );
};

export default Home;
