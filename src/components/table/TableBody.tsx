import { ComponentProps } from "react";

type Props = ComponentProps<"tbody">;

export function TableBody(args: Props) {
  return <tbody {...args} className="bg-card divide-y divide-border" />;
}
