import { ComponentProps } from "react";

type Props = ComponentProps<"label">;

export function FormLabel(args: Props) {
  return <label className="text-primary capitalize" {...args} />;
}
