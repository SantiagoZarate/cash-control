import { Card } from "@component";

export function HomePage() {
  return (
    <section className="p-20 gap-8 grid grid-cols-3">
      <article className="flex flex-col gap-2 justify-center">
        <h4>Your money</h4>
        <div className="pb-2 border-b border-border flex flex-col gap-2">
          <p className="flex gap-2 items-baseline">
            <span className="font-bold text-2xl">$912.00</span>USD
          </p>
          <p className="flex gap-2 items-baseline">
            <span className="font-bold">$912.00</span>ARS
          </p>
        </div>
        <footer>$1 USD = $1000 ARS</footer>
      </article>
      <article className="col-span-2 flex justify-center flex-wrap gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </section>
  );
}
