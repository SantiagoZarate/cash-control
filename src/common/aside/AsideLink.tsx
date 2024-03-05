import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type Props = PropsWithChildren & {
  to: string;
};

export function AsideLink({ to, ...args }: Props) {
  return (
    <Link
      className="hover:bg-primary-fg rounded-md py-1 w-full text-center transition duration-150"
      to={to}
      {...args}
    />
  );
}
