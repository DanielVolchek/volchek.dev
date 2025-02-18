"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { isElementFullyInViewport } from "@/lib/hooks/useElementInViewport";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import {
  applyClassToList,
  delay,
  getFadeInElements,
  getWaitTime,
} from "@/lib/utils";

// Utility imports remain the same

export const AnimationTrigger = () => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const observerRef = useRef<MutationObserver | null>(null);

  const applyVisibilityClass = async () => {
    const elements = getFadeInElements();
    const visibleElements = elements.filter(isElementFullyInViewport);

    if (!elements.length) {
      return false;
    }

    applyClassToList({
      group: elements,
      className: "visible",
      wait: Math.max(
        getWaitTime(visibleElements.length),
        getWaitTime(elements.length),
      ),
    });

    return true;
  };

  const initializeAnimations = async () => {
    if (prefersReducedMotion) return;

    await delay(100); // Brief delay for hydration

    if (await applyVisibilityClass()) return;

    // Setup mutation observer for dynamic elements
    observerRef.current = new MutationObserver(async () => {
      if (await applyVisibilityClass()) {
        observerRef.current?.disconnect();
      }
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  useEffect(() => {
    initializeAnimations();

    return () => {
      observerRef.current?.disconnect();
    };
  }, [pathname]); // Re-run on route changes

  return null; // No rendered elements
};
