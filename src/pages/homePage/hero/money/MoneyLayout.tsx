import { PropsWithChildren } from "react";
import { BlurBalls } from "./BlurBalls";
import { MoneyHeader } from "./MoneyHeader";
import { MoneyFooter } from "./MoneyFooter";

export function MoneyLayout({ children }: PropsWithChildren) {
  return (
    <article
      id="actions"
      className="relative z-20 min-w-[360px] flex flex-col gap-2 justify-center"
    >
      <BlurBalls />
      <MoneyHeader />
      {children}
      <MoneyFooter />
    </article>
  );
}
