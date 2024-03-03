import { ComponentProps } from "react";

type Props = ComponentProps<"form">;

export function FormRoot(args: Props) {
  return (
    <form className="w-[400px] flex  items-center flex-col gap-6" {...args} />
  );
}
