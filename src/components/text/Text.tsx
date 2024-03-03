import { ComponentProps } from "react";

type Props = ComponentProps<"span">;

export function Text(args: Props) {
  return <span {...args} className="text-accent italic" />;
}
