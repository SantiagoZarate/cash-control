type Props = {
  onSelectCard: () => void;
  pfp: string;
  username: string;
  country: string;
  amount: number;
};

export function RecentMovCard({
  onSelectCard,
  amount,
  country,
  pfp,
  username,
}: Props) {
  return (
    <button
      onClick={onSelectCard}
      className="bg-card min-w justify-between flex gap-4 p-2 items-center border border-border rounded-lg hover:-translate-y-1 duration-150 transition-transform hover:opacity-70"
    >
      <div className="flex gap-2 items-center">
        <picture>
          <img className="size-12 rounded-full" src={pfp} alt="" />
        </picture>
        <article className="flex-1 flex-col">
          <p className="capitalize text-sm">{username}</p>
          <p className="text-start text-xs capitalize text-border-active">
            {country}
          </p>
        </article>
      </div>
      <div className="font-bold flex gap-1">
        <span className="text-accent">${amount}</span>
        USD
      </div>
    </button>
  );
}
