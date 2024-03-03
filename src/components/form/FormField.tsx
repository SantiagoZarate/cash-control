import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export function FormField(args: Props) {
  return <div {...args} className="flex flex-col gap-2 w-full" />;
}
