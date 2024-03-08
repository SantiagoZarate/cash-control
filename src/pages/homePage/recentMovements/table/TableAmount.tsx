import { MiniMinusIcon, MiniPlusIcon } from "@icon";

type Props = {
  amount: number;
  currency: string;
  conversion: number;
  type: string;
};

export function TableAmount({ amount, conversion, currency, type }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <span className={type === "send" ? "text-destructive" : "text-primary"}>
        {type === "send" ? <MiniMinusIcon /> : <MiniPlusIcon />}
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-primary-fg">${amount} USD</p>
        <p className="text-xs uppercase">
          ${conversion} {currency}
        </p>
      </div>
    </div>
  );
}
