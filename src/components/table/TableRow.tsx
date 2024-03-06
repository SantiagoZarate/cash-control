import { ComponentProps } from "react";

type Props = ComponentProps<"tr">;

export function TableRow(args: Props) {
  return <tr {...args} className="hover:bg-black/40 duration-150 transition" />;
}
