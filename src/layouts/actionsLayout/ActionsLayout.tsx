import { Link, Outlet, useLocation } from "react-router-dom";

export function ActionsLayout() {
  const { pathname } = useLocation();
  const pathToArray = pathname.split("/");
  const activePage = pathToArray[pathToArray.length - 1];
  console.log("Renderizando el layout de las acciones");

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
          {["send", "add", "extract"].map((page) => (
            <Link
              key={page}
              to={"/actions/" + page}
              className={`${
                activePage === page ? "border-accent" : "border-border"
              } hover:brightness-150 duration-150 transition py-8 min-w-24 border-b-2  text-center uppercase tracking-wider`}
            >
              {page}
            </Link>
          ))}
        </nav>
      </header>
      <Outlet />
    </section>
  );
}
