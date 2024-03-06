import { cn } from "@util/cn";
import { cva } from "class-variance-authority";
import { CVAProps } from "@type";

const badeStyle = cva(
  `text-xs flex uppercase items-center gap-2 w-fit font-bold rounded-full text-primary px-3 py-1 bg-card`,
  {
    variants: {
      intention: {
        default: "",
        completed: "bg-green-300 text-green-700",
        canceled: "bg-destructive text-destructive-fg",
      },
      size: {
        default: "",
        small: "",
        big: "",
      },
    },
    defaultVariants: {
      intention: "default",
      size: "default",
    },
  }
);

type Props = CVAProps<"button", typeof badeStyle>;

export function Badge({
  className,
  intention,
  size,
  children,
  ...args
}: Props) {
  return (
    <span className={cn(badeStyle({ className, intention, size }))} {...args}>
      {intention === "completed" && "completed"}
      {intention === "canceled" && "canceled"}
      {children}
    </span>
  );
}
