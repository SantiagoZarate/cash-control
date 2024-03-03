import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

export function FormInput(args: Props) {
  return (
    <input
      {...args}
      className="py-2 px-2 text-sm placeholder:text-disabled border border-border bg-card rounded-xl flex-1"
    />
  );
}
