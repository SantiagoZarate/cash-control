import { ComponentProps } from "react";

type Props = ComponentProps<"h3">;

export function Heading(args: Props) {
  return (
    <h3
      {...args}
      className="text-primary font-bold flex gap-2 items-center text-2xl"
    />
  );
}
