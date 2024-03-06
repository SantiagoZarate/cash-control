import { Link } from "react-router-dom";

export function ActionProfile() {
  return (
    <Link
      to={"/"}
      className="border-dashed border p-2 gap-4 divide-border border-border bg-black/30 rounded-lg flex flex-col justify-center hover:-translate-y-1 duration-150 transition hover:brightness-150 px-4"
    >
      <article className=" items-center flex justify-center">
        <p className="w-full text-sm">Configure your profile</p>
        <div className="w-fit text-primary-fg text-sm">1/3</div>
      </article>
      <footer className="py-2">
        <div className="relative h-2 w-full rounded-full overflow-hidden bg-border before:inset-0 before:bg-primary before:absolute before:z-50 before:w-1/3 before:rounded-full before:h-full before:left-0 before:top-0" />
      </footer>
    </Link>
  );
}
