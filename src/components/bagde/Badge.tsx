import { cn } from "@util/cn";
import { ComponentProps } from "react";

type Props = ComponentProps<"span">;

export function Badge({ className, ...args }: Props) {
  return (
    <span
      className={cn(
        "text-xs flex uppercase items-center gap-2 rounded-full text-primary px-3 py-1 bg-card",
        className
      )}
      {...args}
    />
  );
}
