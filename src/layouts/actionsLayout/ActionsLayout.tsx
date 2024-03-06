import { Link, Outlet } from "react-router-dom";

export function ActionsLayout() {
  return (
    <section className="relative min-h-screen mx-auto flex flex-col">
      <img
        draggable={false}
        className="absolute w-full h-full top-0 opacity-50 object-cover pointer-events-none"
        src="/images/light-2.webp"
        alt=""
      />
      <header className="w-full px-20 border-b border-border">
        <nav className="max-w-[1440px] mx-auto flex gap-8">
          <Link
            to={"/home"}
            className="hover:brightness-150 duration-150 transition py-8 min-w-24 border-b-2 border-border text-center uppercase tracking-wider"
          >
            Add
          </Link>
          <Link
            to={"/home"}
            className="hover:brightness-150 duration-150 transition py-8 min-w-24 border-b-2 border-border text-center uppercase tracking-wider"
          >
            Extract
          </Link>
          <Link
            to={"/home"}
            className="hover:brightness-150 duration-150 transition py-8 border-b-2 border-accent min-w-24 text-center uppercase tracking-wider"
          >
            Send
          </Link>
        </nav>
      </header>
      <Outlet />
    </section>
  );
}
