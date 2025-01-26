"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import { getBasePath, usePathInfo } from "@/lib/hooks/usePathInfo";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { ComponentWrapper } from "@/lib/types";
import { applyClassToList, delay, getFadeInElements } from "@/lib/utils";

type LoadOutProps = {
  animationDisabled?: boolean;
};

const useTransitionHook = () => {
  const path = usePathInfo();

  const router = useRouter();

  const navigateWithTransition = async (href: string) => {
    if (getBasePath(href) === path.basePath) {
      return;
    }

    try {
      await transitionOut();
    } finally {
      router.push(href);
    }
  };

  const transitionOut = async () => {
    const childrenReversed = getFadeInElements().reverse();
    await applyClassToList({
      group: childrenReversed,
      className: "visible",
      remove: true,
      wait: true,
    });
    await delay(25);
  };

  return navigateWithTransition;
};

export const LoadOutLink: ComponentWrapper<typeof Link, LoadOutProps> = (
  props,
) => {
  const { animationDisabled, href, onClick: onClickProp, ...rest } = props;

  const reducedMotion = useReducedMotion();
  const navigateWithTransition = useTransitionHook();

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
