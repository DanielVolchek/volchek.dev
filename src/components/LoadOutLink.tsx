"use client";
import { MouseEventHandler } from "react";

import Link from "next/link";

import { ComponentWrapper } from "@/lib/types";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { usePageUpdate } from "@/lib/hooks/usePageUpdate";

type LoadOutProps = {
  animationDisabled?: boolean;
};

export const LoadOutLink: ComponentWrapper<typeof Link, LoadOutProps> = (
  props,
) => {
  const reducedMotion = useReducedMotion();

  const { navigateWithTransition } = usePageUpdate();

  const { animationDisabled, href, onClick: onClickProp, ...rest } = props;

  const onClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (onClickProp) {
      onClickProp(event);
    }
    if (animationDisabled || reducedMotion) {
      return;
    }

    event.preventDefault();
    navigateWithTransition(href.toString());
  };

  // TODO decide if you want to keep prefetch true or move prefetch to router.push in usePageUpdate
  return <Link href={href} onClick={onClick} {...rest} prefetch={true} />;
};
