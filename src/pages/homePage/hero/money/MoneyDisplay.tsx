import { useEffect, useState } from "react";
import { BlurBalls } from "./BlurBalls";
import { ClosedEyeIcon, InformationMicroIcon, OpenEyenIcon } from "@icon";
import { MoneyAmount } from "./MoneyAmount";
import { MoneyLoader } from "./MoneyLoader";

export function MoneyDisplay() {
  const [showMoney, setShowMoney] = useState(false);
  const [hideMoney, setHideMoney] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMoney(true);
    }, 3000);
  }, []);

  return (
    <article className="relative z-20  flex flex-col gap-2 justify-center">
      <BlurBalls />
      <header className="flex gap-2 items-center">
        <InformationMicroIcon />
        <h4 className="uppercase text-sm">Your money</h4>
      </header>
      <section className="pb-2 border-b border-border flex items-center gap-20">
        <div className="flex flex-col gap-2 flex-1">
          {showMoney ? <MoneyAmount hideMoney={hideMoney} /> : <MoneyLoader />}
        </div>
        <button
          onClick={() => setHideMoney(!hideMoney)}
          className="p-2 opacity-50 hover:opacity-100 duration-150 transition-opacity"
        >
          {hideMoney ? <OpenEyenIcon /> : <ClosedEyeIcon />}
        </button>
      </section>
      <footer className="text-border-active">$1 USD = $1000 ARS</footer>
    </article>
  );
}
