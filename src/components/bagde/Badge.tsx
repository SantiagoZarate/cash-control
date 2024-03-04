import { ComponentProps } from "react";

type Props = ComponentProps<"span">;

export function Badge(args: Props) {
  return (
    <span
      className="text-xs flex uppercase items-center gap-2 rounded-full text-primary px-3 py-1 bg-card"
      {...args}
    />
  );
}
