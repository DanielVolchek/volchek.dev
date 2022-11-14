import Head from "next/head";
import Nav from "../components/navbar";

export const breakpoints = "w-11/12 md:w-3/4 xl:w-4/6"
// mx-8 mt-6 font-mono font-medium md:mx-32 lg:mx-64 xl:mx-96
export default function base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>
        <Nav />
        <main className={ `mx-auto mt-4 ${breakpoints} px-4` }>
          {children}
        </main>
        <Footer />
      </>
    </>
  );
}

const Footer = () => {
  return <span></span>;
};
