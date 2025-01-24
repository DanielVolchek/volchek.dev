"use client";

import { FC, ReactNode } from "react";
import { usePageUpdate } from "../hooks/usePageUpdate";

// Run transition in effect on all pages
export const PageUpdateContext: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  usePageUpdate();
  return <>{children}</>;
};
