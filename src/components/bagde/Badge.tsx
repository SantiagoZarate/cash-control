import { ComponentProps } from "react";

type Props = ComponentProps<"span">;

export function Badge(args: Props) {
  return (
    <span
      className="text-xs rounded-full text-primary px-2 py-1 bg-card"
      {...args}
    />
  );
}
