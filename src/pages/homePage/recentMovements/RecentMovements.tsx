import { Button } from "@component";
import { DollarSymbolIcon, PoundSymbolIcon, YenSymbolIcon } from "@icon";

export function RecentMovements() {
  return (
    <section className="p-20 min-h-[50vh] flex gap-8 items-center">
      <article className="flex flex-col gap-4 flex-1">
        <p className="text-primary-fg text-2xl">
          it looks like you haven't done any movement yet
        </p>
        <p className="text-xl">why dont you try them out!?</p>
        <a href="#hero">
          <Button>Go get it</Button>
        </a>
      </article>
      <article className="flex gap-4 flex-1 justify-center">
        <div className="text-accent animate-pulse-variation rounded-full">
          <DollarSymbolIcon />
        </div>
        <div className="text-accent animate-pulse-variation rounded-full">
          <PoundSymbolIcon />
        </div>
        <div className="text-accent animate-pulse-variation rounded-full">
          <YenSymbolIcon />
        </div>
      </article>
    </section>
  );
}
