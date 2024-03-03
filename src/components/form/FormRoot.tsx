import { ComponentProps } from "react";

type Props = ComponentProps<"form">;

export function FormRoot(args: Props) {
  return <form className="flex flex-col gap-4" {...args} />;
}
