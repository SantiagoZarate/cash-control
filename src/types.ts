import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export type CVAProps<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
  G extends (...args: any) => any
> = ComponentProps<T> & VariantProps<G>;
