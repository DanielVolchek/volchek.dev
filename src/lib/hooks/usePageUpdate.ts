// TODO this hook is stupid fix it
// transitionIn will run as many times as the hook is defined because we call it inside this hook
// Instead move it out to the context wrapper for the pages
// navigateOutWithTransition function also does not need to be here, it should instead be in the LoadOutLink component
//
// Custom hook to set properties of different pages

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useReducedMotion } from "./useReducedMotion";
import { applyClassToList, waitInputMS } from "../utils";
import { getBasePath, usePathInfo } from "./usePathInfo";

// TODO set a fallback color
const FALLBACK_COLOR = "#fff";

// Sets the color of a CSS var
export const usePageUpdate = () => {
  const path = usePathInfo();

  const router = useRouter();

  const prefersReducedMotion = useReducedMotion();

  const getElements = () =>
    Array.from(document.querySelectorAll(".fade-in-element"));

  const transitionIn = useCallback(async () => {
    if (prefersReducedMotion) {
      return;
    }

    const elements = getElements();
    await applyClassToList({
      group: elements,
      className: "visible",
      wait: true,
    });
  }, [prefersReducedMotion]);

  // When the basePath changes,
  // update the color
  // run entry animations
  //
  // We do this in a useLayoutEffect instead of in a useEffect so that the browser doesn't ever paint the screen with old colors
  // For more info read about useLayoutEffect here (https://react.dev/reference/react/useLayoutEffect)
  useEffect(() => {
    let color = FALLBACK_COLOR;

    if (path.pageProps) {
      color = path.pageProps.color;
    }

    document.documentElement.style.setProperty("--page-secondary-color", color);
  }, [path.basePath, path.pageProps, transitionIn]);

  useEffect(() => {
    transitionIn();
  }, [path.fullPath, transitionIn]);

  // Page transition function
  // Runs animation if the user does not prefer reduced animation
  const navigateWithTransition = async (href: string) => {
    if (getBasePath(href) === path.basePath) {
      return;
    }

    try {
      if (!prefersReducedMotion) {
        await transitionOut();
      }
    } finally {
      router.push(href);
    }
  };

  const transitionOut = async () => {
    const childrenReversed = getElements().reverse();
    await applyClassToList({
      group: childrenReversed,
      className: "visible",
      remove: true,
      wait: true,
    });
    await waitInputMS(25);
  };

  return { page: path.pageProps, navigateWithTransition };
};

//};
//////////};
////////
//};
//////////};
//////////////////////////};
//////////////////////////};
//////////////////////////};
////////////////
