"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { ComponentWrapper } from "@/lib/types";

type LoadOutProps = {
  animationDisabled?: boolean;
};

const useTransitionHook = () => {
  const router = useRouter();

  const navigateWithTransition = async (href: string) => {
    try {
      await transitionOut();
    } finally {
      router.push(href);
    }
  };

  const transitionOut = async () => {
    // TODO decide if this is needed/another transition out effect or nothing
    // document.querySelector("main")?.classList.add("opacity-0");
    // const elements = getFadeInElements().reverse();
    // TODO fade out full main
    // await applyClassToList({
    //   group: elements,
    //   className: "visible",
    //   remove: true,
    //   wait: getWaitTime(elements?.length),
    // });
    // await delay(25);
  };

  return navigateWithTransition;
};

// TODO LoadOutLink can probably be replaced since there is no transition out effect anymore
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
