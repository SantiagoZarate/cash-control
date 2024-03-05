import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  isExtended?: boolean;
};

export function AsideSection({ isExtended, ...args }: Props) {
  return (
    <div
      {...args}
      className={`flex flex-col justify-between gap-2 min-h-20 items-center ${
        isExtended && "flex-1"
      }`}
    />
  );
}
