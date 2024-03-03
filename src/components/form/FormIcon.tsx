import { ElementType } from "react";

type Props = {
  icon: ElementType;
};

export function FormIcon({ icon: Icon }: Props) {
  return (
    <span className="min-w-fit p-2">
      <Icon />
    </span>
  );
}
