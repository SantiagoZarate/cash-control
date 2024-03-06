import { ComponentProps } from "react";
import "./Aside.style.css";

type Props = ComponentProps<"p">;

export function AsideText(args: Props) {
  return (
    <p
      {...args}
      id="aside-text"
      className="text-sm tracking-[0.15em] uppercase"
    />
  );
}
