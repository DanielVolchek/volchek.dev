import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import type { Stack as StackType } from "./stack";
import Stack from "./stack";

export type CardProps = {
  title: string;
  desc: string;
  img: StaticImageData;
  longdesc: string;
  stack: StackType[];
};

export default function Card({ title, desc, img, longdesc, stack }: CardProps) {
  const [mousedOver, setMouseOver] = useState(false);
  return (
    <div
      onMouseEnter={() => setMouseOver(() => true)}
      onMouseLeave={() => setMouseOver(() => false)}
      className="flex cursor-pointer flex-col items-center rounded-lg border-2 border-gray-200 bg-white text-center shadow-lg shadow-gray-200 transition-transform duration-[350ms] hover:scale-105 md:w-5/12"
    >
      <div className="w-full rounded-lg border-b-2 border-gray-200 p-3">
        <Image
          src={img}
          alt={`image for project ${title}`}
          className="rounded-lg"
        />
      </div>
      <div className="">
        <h2 className="text-center text-4xl font-bold md:text-2xl lg:text-4xl">
          {title}
        </h2>
        <p>{desc}</p>
      </div>
      <div className="mt-8 w-11/12 pb-4">
        <Stack stack={stack} mousedOver={mousedOver} />
      </div>
    </div>
  );
}
