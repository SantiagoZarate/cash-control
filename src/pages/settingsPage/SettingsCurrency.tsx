import { Heading } from "@component";
import { useCurrency } from "@context/currencyContext";
import { currencys } from "@data/currencys";
import { Currency } from "@type";

export function SettingsCurrency() {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <article className="p-20 relative w-full h-full flex items-center justify-between gap-4 max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-2">
        <Heading>Local currency</Heading>
        <p className="text-sm text-border-active">
          Discover Real-Time Currency Conversions and Exchange Rates.
        </p>
      </div>
      <select
        onChange={(e) => toggleCurrency(e.currentTarget.value as Currency)}
        className="p-2 rounded-xl bg-card border border-border uppercase w-1/2"
        name=""
        id=""
        defaultValue={currency}
      >
        {currencys.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
    </article>
  );
}
