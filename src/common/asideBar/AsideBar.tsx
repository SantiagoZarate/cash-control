import { Link } from "react-router-dom";

export function AsideBar() {
  return (
    <aside className="flex fixed w-20 flex-col border-r border-border h-screen divide-y divide-border">
      <div className="flex flex-col gap-2 min-h-20 items-center justify-end">
        <div>logo</div>
        <div>perfil</div>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex flex-col gap-2 items-center p-1">
          <Link
            className="w-full text-center hover:bg-primary-fg rounded-md"
            to={"/"}
          >
            Home
          </Link>
          <Link to={"/"}>Send</Link>
          <Link to={"/"}>Receive</Link>
        </nav>
        <nav className="flex flex-col gap-2 items-center">
          <Link to={"/"}>share</Link>
          <Link to={"/"}>settings</Link>
        </nav>
      </div>
      <div className="flex flex-col min-h-20 items-center">
        <button>sign out</button>
      </div>
    </aside>
  );
}
