import { NotificationIcon, QuestionIcon } from "@icon";
import { Link } from "react-router-dom";

export function HeaderRightSide() {
  return (
    <div className="flex gap-4">
      <button className="relative p-2 hover:brightness-150 duration-150 transition">
        <NotificationIcon />
        <span className="absolute top-0 size-4 text-destructive-fg text-xs bg-destructive rounded-full">
          2
        </span>
      </button>
      <Link to={"/"} className="flex gap-2 bg-border p-2 rounded-md">
        <QuestionIcon />
        <p>Help</p>
      </Link>
    </div>
  );
}
