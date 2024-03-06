import { cn } from "@util/cn";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type Props = PropsWithChildren & {
  to: string;
  className?: string;
};

export function AsideLink({ to, className, ...args }: Props) {
  return (
    <Link
      className={cn(
        "hover:bg-border px-6 py-3 flex items-center gap-3 w-full text-center transition duration-150",
        className
      )}
      to={to}
      {...args}
    />
  );
}
