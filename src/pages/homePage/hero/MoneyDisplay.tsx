import { useEffect, useState } from "react";
import { BlurBall } from "./Blob";
import { InformationMicroIcon } from "@icon";

export function MoneyDisplay() {
  const [showMoney, setShowMoney] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMoney(true);
    }, 3000);
  }, []);

  return (
    <article className="relative z-20  flex flex-col gap-2 justify-center">
      <BlurBall />
      <header className="flex gap-2 items-center">
        <InformationMicroIcon />
        <h4 className="uppercase text-sm">Your money</h4>
      </header>
      <div className="pb-2 border-b border-border flex flex-col gap-2">
        {showMoney ? (
          <>
            <p className="flex gap-2 items-baseline">
              <span className="usd-display text-background font-bold text-[48px] group-hover/hero:text-accent duration-300 transition-colors antialiased">
                $912.00
              </span>
              USD
            </p>
            <p className="flex gap-2 items-baseline">
              <span className="font-bold">$4.912.18</span>ARS
            </p>
          </>
        ) : (
          <>
            <div className="rounded-md bg-border-active w-[60%] h-[72px] animate-pulse" />
            <div className="rounded-md bg-border-active w-1/3 h-6 animate-pulse" />
          </>
        )}
      </div>
      <footer className="text-border-active">$1 USD = $1000 ARS</footer>
    </article>
  );
}
