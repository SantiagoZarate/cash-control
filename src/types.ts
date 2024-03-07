import { currencys } from "@data/currencys";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export type CVAProps<
  Component extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
  Styles extends (...args: any) => any
> = ComponentProps<Component> & VariantProps<Styles>;

export type Currency = (typeof currencys)[number];
