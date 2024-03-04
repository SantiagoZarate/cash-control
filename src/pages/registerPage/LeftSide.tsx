export function LeftSide() {
  return (
    <article className="group bg-card relative flex justify-center items-center">
      <img
        draggable={false}
        className="h-full absolute object-cover mix-blend-multiply saturate-0 contrast-50 brightness-200 w-full"
        src="images/hero.webp"
        alt=""
      />
      <header className="relative p-12 flex flex-col gap-4">
        <h1 className="text-4xl text-accent font-bold text-center">
          Cash Counter{" "}
          <span className="group-hover:bg-primary duration-150 transition rounded-full">
            {" "}
            💸
          </span>
        </h1>
        <p>Take Charge of Your Money, Anytime, Anywhere.</p>
      </header>
    </article>
  );
}
