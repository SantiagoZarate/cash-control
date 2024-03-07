import { useCurrency } from "@hook/useCurrency";
import { ExchangeIcons } from "@icon";

export function MoneyFooter() {
  const { currency } = useCurrency();

  return (
    <footer className="text-border-active flex items-center gap-2">
      <ExchangeIcons />
      <p className="uppercase">$1 usd = $1000 {currency}</p>
    </footer>
  );
}
