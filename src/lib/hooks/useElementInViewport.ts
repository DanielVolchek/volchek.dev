"use client";

import { useEffect, useState } from "react";

export const isElementFullyInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const useElementInViewport = (element: Element) => {
  const [elementInViewport, setElementInViewport] = useState(
    isElementFullyInViewport(element),
  );

  useEffect(() => {
    const handleResize = () => {
      setElementInViewport(() => isElementFullyInViewport(element));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [element]);

  return elementInViewport;
};
