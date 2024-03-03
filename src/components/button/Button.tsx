import { ComponentProps } from "react";

export function Button(args: ComponentProps<"button">) {
  return (
    <button
      {...args}
      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-fg uppercase font-bold text-sm"
    />
  );
}