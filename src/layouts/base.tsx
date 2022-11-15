import Header from "../components/header";
import Footer from "../components/footer";

export const breakpoints = "w-11/12 md:w-3/4 xl:w-4/6";
export default function base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>
        <Header />
        <main className={`mx-auto mt-4 min-h-screen ${breakpoints} px-4`}>
          {children}
        </main>
        <Footer />
      </>
    </>
  );
}
