import { currencyContext } from "@context/currencyContext";
import { Currency } from "@type";
import { useContext } from "react";

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
