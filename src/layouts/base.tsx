import Head from "next/head";
import Nav from "../components/navbar";

export default function base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Volchek.Dev</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <body className="mx-8 mt-6 font-mono font-medium md:mx-32 lg:mx-64 xl:mx-96" />
      </Head>
      <>
        <Nav />
        {children}
        <Footer />
      </>
    </>
  );
}

const Footer = () => {
  return <span></span>;
};