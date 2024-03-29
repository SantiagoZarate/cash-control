import { SignUpType } from "src/helpers/registerSchema";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

type Props = ComponentProps<"span"> & {
  name: keyof SignUpType;
};

export function FormErrorMessage({ name, ...args }: Props) {
  const {
    formState: { errors },
  } = useFormContext<SignUpType>();
  const message = errors[name]?.message;

  if (!message) return null;

  return (
    <span className="text-xs text-destructive capitalize" {...args}>
      {message}
    </span>
  );
}
