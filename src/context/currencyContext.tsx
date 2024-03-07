import { PropsWithChildren, createContext, useState } from "react";
import { Currency } from "@type";

interface ICurrencyContext {
  type: Currency;
  setter: (newCurrency: Currency) => void;
}

export const currencyContext = createContext<ICurrencyContext | null>(null);

export function CurrencyProvider({ children }: PropsWithChildren) {
  const [currency, setCurrency] = useState<Currency>("ars");

  return (
    <currencyContext.Provider
      value={{
        type: currency,
        setter: setCurrency,
      }}
    >
      {children}
    </currencyContext.Provider>
  );
}
