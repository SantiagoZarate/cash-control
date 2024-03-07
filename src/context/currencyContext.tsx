import { PropsWithChildren, createContext, useContext, useState } from "react";
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

export function useCurrency() {
  const values = useContext(currencyContext);
  if (values === undefined || values === null)
    throw Error(
      "You are not allowed to use this context values, make sure the component using this hook is wrapped inside CurrencyProvider"
    );

  const { setter, type } = values;

  const toggleCurrency = (newCurrency: Currency) => {
    console.log("Hola, estoy intentando cambiar el estado global");
    if (type === newCurrency) return;
    setter(newCurrency);
  };

  return {
    currency: values.type,
    toggleCurrency,
  };
}
