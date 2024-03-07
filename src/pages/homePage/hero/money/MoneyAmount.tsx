type Props = {
  hideMoney: boolean;
  currency: string;
};

export function MoneyAmount({ hideMoney, currency }: Props) {
  return (
    <>
      <p className="flex gap-2 items-baseline">
        {hideMoney ? (
          <span className="usd-display text-background font-bold text-[48px] group-hover/hero:text-accent duration-300 transition-colors antialiased">
            $912.00
          </span>
        ) : (
          <span className="font-bold text-[48px]">$*****</span>
        )}
        USD
      </p>
      <p className="flex gap-2 items-baseline">
        <span className="font-bold">{hideMoney ? "$4.912.18" : "$*****"}</span>
        <span className="uppercase">{currency}</span>
      </p>
    </>
  );
}
