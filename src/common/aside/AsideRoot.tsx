import { ComponentProps } from "react";

export function AsideRoot(args: ComponentProps<"aside">) {
  return (
    <aside
      {...args}
      className="flex fixed w-20 flex-col border-r border-border h-screen divide-y divide-border"
    />
  );
}
