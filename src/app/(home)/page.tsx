import { Carousel, CarouselItem } from "@/components/Carousel";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Volchek.Dev - Home",
  description: "Daniel Volchek - Portfolio (Home Page)",
};

export default function Home() {
  return (
    <div className="w-full sm:min-w-[50%] flex flex-col items-center">
      <div>
        <h1 className="text-4xl">Hi, I'm Daniel Volchek</h1>
        <Carousel items={CarouselItems} />
      </div>
    </div>
  );
}

const Developer = () => {
  return (
    <CarouselItem
      title={"Developer"}
      content={<p>Im a developer</p>}
      buttonText={"See More"}
    />
  );
};

const CarouselItems = [<Developer key={0} />];
