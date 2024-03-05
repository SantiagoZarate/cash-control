import { ElementType } from "react";
import { Link } from "react-router-dom";

type Props = {
  icon: ElementType;
  text: string;
  url: string;
  description: string;
};

export function ActionCard({ icon: Icon, text, url, description }: Props) {
  return (
    <Link
      to={url}
      className="w-full border p-2 divide-x divide-border border-border bg-card rounded-lg flex justify-center items-center gap-2 hover:-translate-y-1 duration-150 transition hover:brightness-150"
    >
      <div className="flex flex-col items-center p-2 px-4 gap-2">
        <Icon />
        <p className="capitalize font-bold">{text}</p>
      </div>
      <p className="p-2 flex-1 text-sm">{description}</p>
    </Link>
  );
}
