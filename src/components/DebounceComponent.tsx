"use client";
import { ReactNode, useEffect, useState } from "react";

import { FCWithChildren } from "@/lib/types";

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
