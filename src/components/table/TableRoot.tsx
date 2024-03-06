import { ComponentProps } from "react";

type Props = ComponentProps<"table">;

export function TableRoot(args: Props) {
  return (
    <table
      {...args}
      className="relative w-full table-fixed bg-card rounded-lg overflow-hidden"
    />
  );
}
