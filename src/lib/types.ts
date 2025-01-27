import type {
  ComponentProps,
  FC,
  HTMLElementType,
  JSXElementConstructor,
  ReactNode,
} from "react";

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type FCWithChildren<
  TProps extends Record<string, unknown> = Record<string, unknown>,
> = FC<TProps & { children: ReactNode }>;

export type ComponentWrapper<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TComponent extends JSXElementConstructor<any> | HTMLElementType,
  TRecord = Record<string, unknown>,
> = FC<ComponentProps<TComponent> & TRecord>;

export type FnType = (...args: unknown[]) => unknown;

export type Maybe<T> = T | undefined;
export type Nullable<T> = T | null;

export type DivCW<TRecord = Record<string, unknown>> = ComponentWrapper<
  "div",
  TRecord
>;
