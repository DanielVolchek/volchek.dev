import type { ComponentProps, FC, JSXElementConstructor } from "react";

export type ComponentWrapper<
  //eslint-disable-next-line
  TComponent extends JSXElementConstructor<any>,
  KRecord extends Record<string, unknown> = Record<string, unknown>,
> = FC<ComponentProps<TComponent> & KRecord>;
