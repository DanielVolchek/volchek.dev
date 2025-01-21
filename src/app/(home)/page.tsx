import { Carousel, CarouselItem } from "@/components/Carousel";
import { Typewriter } from "@/components/Typewriter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volchek.Dev - Home",
  description: "Daniel Volchek - Portfolio (Home Page)",
};

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center sm:min-w-[50%]">
      <div className="inline-block">
        <h1 className="text-4xl">
          Hi, I'm Daniel Volchek,
          <br />
          I'm a
          <Typewriter />
        </h1>
      </div>
    </div>
  );
}
