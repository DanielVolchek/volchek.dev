import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volchek.Dev - Home",
  description: "Daniel Volchek - Portfolio (Home Page)",
};

export default function Home() {
  return (
    <main>
      <div className="inline-block">
        <h1 className="text-3xl shadow-white drop-shadow-2xl">
          Daniel Volchek
        </h1>
        <p className="text-lg italic text-gray-400">
          Front-End Platform Developer
        </p>
      </div>
    </main>
  );
}
