import { ComponentProps } from "react";

type Props = ComponentProps<"nav">;

export function AsideListOfLinks(args: Props) {
  return <nav {...args} className="flex w-full flex-col items-center" />;
}
