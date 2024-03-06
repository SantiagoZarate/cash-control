import { MiniPlusIcon } from "@icon";

type Props = {
  amount: number;
  currency: string;
  conversion: number;
};

export function TableAmount({ amount, conversion, currency }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <MiniPlusIcon />
      <div className="flex flex-col gap-1">
        <p className="text-primary-fg">${amount} USD</p>
        <p className="text-xs uppercase">
          ${conversion} {currency}
        </p>
      </div>
    </div>
  );
}
