import "./Header.style.css";
import { HeaderLeftSide } from "./HeaderLeftSide";
import { HeaderRightSide } from "./HeaderRightSide";

export function Header() {
  return (
    <header className="w-full z-40 header fixed top-0 left-0 pl-20 ">
      <div className="flex justify-between items-center px-20 py-5">
        <HeaderLeftSide />
        <HeaderRightSide />
      </div>
    </header>
  );
}
