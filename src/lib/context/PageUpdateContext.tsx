"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
import { usePathInfo } from "../hooks/usePathInfo";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { applyClassToList, getFadeInElements } from "../utils";

const usePageUpdate = () => {
  const path = usePathInfo();
  const prefersReducedMotion = useReducedMotion();

  const pageObserverRef = useRef<MutationObserver | null>(null);

  const transitionIn = async () => {
    console.log("transitioning in");

    if (prefersReducedMotion) {
      return;
    }

    const applyVisibilityClass = () => {
      const elements = getFadeInElements();
      if (elements.length > 0) {
        applyClassToList({
          group: elements,
          className: "visible",
          wait: true,
        });
        return true;
      }
      return false;
    };

    // Try to apply the class immediately
    if (applyVisibilityClass()) {
      return;
    }

    // If elements are not available, observe changes in the DOM
    pageObserverRef.current = new MutationObserver((_, observer) => {
      console.log("mutation occurred");
      // We only want to observe once, if the document has no fade in elements after first mutation it won't have any at all
      applyVisibilityClass();
      observer.disconnect();
    });

    // Start observing the document for changes
    pageObserverRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  useEffect(() => {
    transitionIn();

    return () => pageObserverRef.current?.disconnect();
  }, [path.fullPath]);
};

export const PageUpdateContext: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  usePageUpdate();

  return <>{children}</>;
};
