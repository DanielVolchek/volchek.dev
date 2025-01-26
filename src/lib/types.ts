import type { ComponentProps, FC, JSXElementConstructor } from "react";

export type ComponentWrapper<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TComponent extends JSXElementConstructor<any>,
  KRecord extends Record<string, unknown> = Record<string, unknown>,
> = FC<ComponentProps<TComponent> & KRecord>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FnType = (...args: any[]) => any;
