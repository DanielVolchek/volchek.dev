"use client";

import { FC, ReactNode, useEffect } from "react";
import { usePathInfo } from "../hooks/usePathInfo";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { applyClassToList, getFadeInElements, delay } from "../utils";
import { FnType } from "../types";

async function retryOperation(operation: FnType, maxRetries = 3) {
  let attempt = 0;
  let delayTime = 100; // Initial delay time in milliseconds (1 second)

  while (attempt < maxRetries) {
    try {
      // Attempt the operation
      const result = await operation();
      return result; // Return the result if successful
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) {
        throw new Error(
          `Operation failed after ${maxRetries} attempts: ${error}`,
        );
      }
      console.log(
        `Attempt ${attempt} failed. Retrying in ${delayTime / 1000} seconds...`,
      );

      // Wait for the specified delay time before retrying
      await delay(delayTime);

      // Increase the delay time exponentially
      delayTime *= 2;
    }
  }
}

// Run transition in effect on all pages
const usePageUpdate = () => {
  const path = usePathInfo();
  const prefersReducedMotion = useReducedMotion();

  const transitionIn = async () => {
    console.log("transitioning in");

    if (prefersReducedMotion) {
      return;
    }

    const elements = await retryOperation(() => {
      const elements = getFadeInElements();
      if (elements.length === 0) {
        throw new Error("Failed to get fade in elements from dom");
      }
      return elements;
    }, 5);

    await applyClassToList({
      group: elements,
      className: "visible",
      wait: true,
    });
  };

  useEffect(() => {
    transitionIn();
  }, [path.fullPath]);
};

export const PageUpdateContext: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  usePageUpdate();

  return <>{children}</>;
};
