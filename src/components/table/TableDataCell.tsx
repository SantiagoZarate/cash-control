import { ComponentProps } from "react";

type Props = ComponentProps<"td">;

export function TableDataCell(args: Props) {
  return <td {...args} className="px-6 py-4" />;
}
