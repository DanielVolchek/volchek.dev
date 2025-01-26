"use client";
import { FCWithChildren } from "@/lib/types";
import { ReactNode, useEffect, useState } from "react";

type PropsType = {
  delay?: number;
};

export const DebounceComponent: FCWithChildren<PropsType> = (props) => {
  const { children, delay = 500 } = props;
  const [element, setElement] = useState<ReactNode | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setElement(children);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, children]);

  return <>{element}</>;
};
