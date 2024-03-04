import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  `rounded-full w-fit hover:brightness-75 transition duration-150 flex items-center
  gap-2 px-4 py-2 bg-primary text-primary-fg uppercase font-bold text-sm`,
  {
    variants: {
      intent: {
        default: "",
        destructive: "",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);
