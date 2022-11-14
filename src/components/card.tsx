import Image, { StaticImageData } from "next/image";
import type {Stack as StackType} from "./stack";
import Stack from "./stack";

export type CardProps = {
  title: string;
  desc: string;
  img: StaticImageData;
  longdesc: string;
  stack: StackType[];
}

export default function Card({ title, desc, img, longdesc, stack }: CardProps) {
  return (
    <div className="lg:min-h[25vh] flex min-h-[50vh] cursor-pointer flex-col items-center rounded-lg border-2 border-gray-200 shadow-lg shadow-gray-200 transition-transform duration-[350ms] hover:scale-105 lg:w-1/2">
      <div className="w-full rounded-lg border-b-2 border-gray-200 p-3">
        <Image
          src={img}
          alt={`image for project ${title}`}
          className="rounded-lg"
        />
      </div>
      <div className="">
        <h2 className="text-center text-4xl font-bold">{title}</h2>
        <p>{desc}</p>
      </div>
        <div className="w-3/4 mt-8">
      <Stack stack={stack}/>
      </div>
    </div>
  );
}
