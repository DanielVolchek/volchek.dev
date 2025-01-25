"use client";

import { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const getBreakpoint = (width: number) => {
  if (width < breakpoints.sm) return "base";
  if (width < breakpoints.md) return "sm";
  if (width < breakpoints.lg) return "md";
  if (width < breakpoints.xl) return "lg";
  if (width < breakpoints["2xl"]) return "xl";
  return "2xl";
};

const getBreakpointSafe = () => {
  if (typeof window == "undefined") {
    return undefined;
  }
  return getBreakpoint(window.innerWidth);
};

export const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpointSafe());

  useEffect(() => {
    const handleResize = () => setBreakpoint(() => getBreakpointSafe());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
