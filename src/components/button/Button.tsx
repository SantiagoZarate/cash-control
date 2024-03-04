import { cva } from "class-variance-authority";
import { CVAProps } from "@type";
import { cn } from "@util/cn";

export const buttonStyles = cva(
  `px-4 py-2 rounded-full w-fit transition duration-150 flex items-center gap-2 uppercase font-bold text-sm`,
  {
    variants: {
      intent: {
        default: "bg-primary text-primary-fg",
        destructive: "bg-destructive text-destructive-fg",
        outline:
          "outline outline-1 outline-border text-border-active hover:bg-primary",
      },
      disabled: {
        true: "brightness-50",
      },
      hoverable: {
        true: "hover:-translate-y-1",
      },
    },
    defaultVariants: {
      intent: "default",
      disabled: false,
      hoverable: false,
    },
  }
);

type Props = CVAProps<"button", typeof buttonStyles>;

export function Button({
  intent,
  className,
  disabled,
  hoverable,
  ...args
}: Props) {
  return (
    <button
      className={cn(buttonStyles({ intent, className, disabled, hoverable }))}
      {...args}
    />
  );
}
