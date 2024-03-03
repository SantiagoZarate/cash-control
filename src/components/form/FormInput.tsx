import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

type Props = ComponentProps<"input"> & {
  name: string;
};

export function FormInput({ name, ...args }: Props) {
  const { register } = useFormContext();

  return (
    <input
      {...args}
      {...register(name)}
      className="py-2 px-2 text-sm placeholder:text-disabled border duration-150 transition outline-none ring-transparent focus:border-border-active border-border bg-card rounded-xl flex-1"
    />
  );
}
