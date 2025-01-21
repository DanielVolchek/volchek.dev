"use client";
import { FC, ReactNode, useMemo } from "react";

type PropsType = {
  items: ReactNode[];
  showArrows?: boolean;
};

/**
 * <Carousel>
 *
 * </Carousel>
 */

export const Carousel: FC<PropsType> = (props) => {
  const { items, showArrows = true } = props;
  return <div itemID="carouselWrapper">{items}</div>;
};

type CarouselItemProps = {
  title: ReactNode;
  content: ReactNode;
  buttonText: ReactNode;
};

export const CarouselItem: FC<CarouselItemProps> = (props) => {
  const { title, content, buttonText } = props;

  const titleComponent =
    typeof title === "string" ? (
      <h2 className="text-4xl inline-block">{title}</h2>
    ) : (
      title
    );

  return (
    <div itemID="carouselItem" className="relative">
      <HoverBoundary />
      {titleComponent}
      <section className="border border-red-200 p-2 aspect-square flex flex-col items-center justify-center">
        {content}
      </section>
      <button>{buttonText}</button>
    </div>
  );
};

const HoverBoundary: FC = () => {
  const onMouseEnter = () => {
    console.log("moused over");
  };

  const onMouseLeave = () => {
    console.log("moused out");
  };
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="p-8 box-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
      itemID="hoverBoundary"
    />
  );
};
