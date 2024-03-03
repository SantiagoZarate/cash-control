import { ComponentProps } from "react";

type Props = ComponentProps<"label">;

export function FormLabel(args: Props) {
  return (
    <label
      className="flex items-center gap-2 text-primary capitalize"
      {...args}
    />
  );
}
