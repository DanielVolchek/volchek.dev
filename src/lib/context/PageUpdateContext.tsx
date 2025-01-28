"use client";

import { FC, ReactNode, useEffect, useRef } from "react";

import { isElementFullyInViewport } from "../hooks/useElementInViewport";
import { usePathInfo } from "../hooks/usePathInfo";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  applyClassToList,
  delay,
  getFadeInElements,
  getWaitTime,
} from "../utils";

const usePageUpdate = () => {
  const path = usePathInfo();
  const prefersReducedMotion = useReducedMotion();

  const pageObserverRef = useRef<MutationObserver | null>(null);

  const applyVisibilityClass = () => {
    const elements = getFadeInElements();

    const elementsInViewportLength = elements.filter(
      isElementFullyInViewport,
    ).length;

    console.log(elements);
    const elementsFound = elements.length > 0;
    if (elementsFound) {
      applyClassToList({
        group: elements,
        className: "visible",
        wait: Math.min(
          getWaitTime(elementsInViewportLength),
          getWaitTime(elements.length),
        ),
      });
    }

    return elementsFound;
  };

  const transitionIn = async () => {
    console.log("transitioning in");

    if (prefersReducedMotion) {
      return;
    }

    // await delay(200);

    // Try to apply the class immediately
    if (applyVisibilityClass()) {
      return;
    }

    // If elements are not available, observe changes in the DOM
    pageObserverRef.current = new MutationObserver((_, observer) => {
      if (applyVisibilityClass()) {
        observer.disconnect();
      }
    });

    // Start observing the document for changes
    pageObserverRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  useEffect(() => {
    transitionIn();

    return () => {
      pageObserverRef.current?.disconnect();
    };
  }, [path.fullPath]);
};

export const PageUpdateContext: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  usePageUpdate();

  return <>{children}</>;
};
