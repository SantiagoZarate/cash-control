import { ComponentProps } from "react";

export function AsideRoot(args: ComponentProps<"aside">) {
  return (
    <aside
      {...args}
      id="aside"
      className="bg-background z-50 duration-150 transition-all flex fixed w-20 hover:w-48 flex-col border-r border-border h-screen divide-y divide-border"
    />
  );
}
