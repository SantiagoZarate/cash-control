import { ExtractMoneyIcon, FundMoneyIcon } from "@icon";

type Props = {
  type: string;
};

export function TableMovementType({ type }: Props) {
  return (
    <div className="flex gap-2">
      {type === "add" ? (
        <>
          <FundMoneyIcon />
          <p className="capitalize tracking-wide">Add</p>
        </>
      ) : (
        <>
          <ExtractMoneyIcon />
          <p className="capitalize tracking-wide">Send</p>
        </>
      )}
    </div>
  );
}
