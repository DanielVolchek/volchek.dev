// "use client";
// import useEmblaCarousel from "embla-carousel-react";
// import { FC, ReactNode, useMemo } from "react";
//
// type PropsType = {
//   items: ReactNode[];
//   showArrows?: boolean;
// };
//
// export const Carousel: FC<PropsType> = (props) => {
//   const { items, showArrows = true } = props;
//   return <div itemID="carouselWrapper">{items}</div>;
// };
//
// type CarouselItemProps = {
//   title: ReactNode;
//   content: ReactNode;
//   buttonText: ReactNode;
// };
//
// export const CarouselItem: FC<CarouselItemProps> = (props) => {
//   const { title, content, buttonText } = props;
//
//   const titleComponent =
//     typeof title === "string" ? (
//       <h2 className="mb-3 mt-1 inline-block text-center text-8xl">{title}</h2>
//     ) : (
//       title
//     );
//
//   return (
//     <div itemID="carouselItem" className="relative">
//       <HoverBoundary />
//       {titleComponent}
//       <section className="flex w-[calc(100%+10rem)] flex-col items-center justify-center border border-red-200 p-2">
//         {content}
//       </section>
//       <button>{buttonText}</button>
//     </div>
//   );
// };
//
// const HoverBoundary: FC = () => {
//   const onMouseEnter = () => {
//     console.log("moused over");
//   };
//
//   const onMouseLeave = () => {
//     console.log("moused out");
//   };
//   return (
//     <div
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className="absolute left-1/2 top-1/2 box-content h-full w-full -translate-x-1/2 -translate-y-1/2 p-8"
//       itemID="hoverBoundary"
//     />
//   );
// };
//
// // TODO remove embla package
// export const EmblaCarousel = () => {
//   const [emblaRef] = useEmblaCarousel();
//
//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="embla__slide">Slide 1</div>
//         <div className="embla__slide">Slide 2</div>
//         <div className="embla__slide">Slide 3</div>
//       </div>
//     </div>
//   );
// };
//
// const Developer = () => {
//   return (
//     <CarouselItem
//       title={"Developer"}
//       content={<DeveloperImage />}
//       buttonText={"See More"}
//     />
//   );
// };
//
// const DeveloperImage = () => {
//   return (
//     <img
//       src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg"
//       className="object-cover"
//     />
//   );
// };
//
// const CarouselItems = [<Developer key={0} />];
