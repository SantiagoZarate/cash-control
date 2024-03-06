import { NotificationIcon, QuestionIcon } from "@icon";
import "./Header.style.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full z-40 header fixed top-0 left-0 pl-20 ">
      <div className="flex justify-between items-center px-20 py-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl text-accent">Cash Counter</h1>
          <p className="text-xs">
            Take Charge of Your Money, Anytime, Anywhere.
          </p>
        </div>
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
      </div>
    </header>
  );
}
