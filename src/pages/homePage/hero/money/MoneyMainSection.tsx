import { OpenEyenIcon, ClosedEyeIcon } from "@icon";
import { MoneyAmount } from "./MoneyAmount";
import { MoneyLoader } from "./MoneyLoader";
import { useState, useEffect } from "react";
import { useCurrency } from "@hook/useCurrency";

export function MoneyMainSection() {
  const { currency } = useCurrency();
  const [showMoney, setShowMoney] = useState(false);
  const [hideMoney, setHideMoney] = useState(false);

  // Development purposes
  useEffect(() => {
    setTimeout(() => {
      setShowMoney(true);
    }, 3000);
  }, []);

  return (
    <section className="pb-2 border-b border-border flex items-center gap-20">
      <div className="flex flex-col gap-2 flex-1">
        {showMoney ? (
          <MoneyAmount hideMoney={hideMoney} currency={currency} />
        ) : (
          <MoneyLoader />
        )}
      </div>
      <button
        onClick={() => setHideMoney(!hideMoney)}
        className="p-2 opacity-50 hover:opacity-100 duration-150 transition-opacity"
      >
        {hideMoney ? <OpenEyenIcon /> : <ClosedEyeIcon />}
      </button>
    </section>
  );
}
