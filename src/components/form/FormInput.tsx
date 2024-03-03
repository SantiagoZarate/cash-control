import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

export function FormInput(args: Props) {
  return (
    <input
      {...args}
      className="text-sm placeholder:text-disabled border border-border bg-card rounded-md flex-1"
    />
  );
}
