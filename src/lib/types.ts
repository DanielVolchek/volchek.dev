import type {
  ComponentProps,
  FC,
  JSXElementConstructor,
  ReactNode,
} from "react";

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type FCWithChildren<
  TProps extends Record<string, unknown> = Record<string, unknown>,
> = FC<Prettify<TProps & { children: ReactNode }>>;

export type ComponentWrapper<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TComponent extends JSXElementConstructor<any>,
  KRecord extends Record<string, unknown> = Record<string, unknown>,
> = FC<Prettify<ComponentProps<TComponent> & KRecord>>;

export type FnType = (...args: unknown[]) => unknown;

export type Maybe<T> = T | undefined;
export type Nullable<T> = T | null;
