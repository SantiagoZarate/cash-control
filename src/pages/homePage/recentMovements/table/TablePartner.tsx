type Props = {
  pfp: string;
  country: string;
  username: string;
};

export function TablePartner({ country, pfp, username }: Props) {
  return (
    <div className="flex items-center gap-2">
      <img
        draggable={false}
        className="size-10 bg-green-800 rounded-full object-cover"
        src={pfp}
        alt=""
      />
      <div className="flex flex-col">
        <p className="text-border-active capitalize">{username}</p>
        <p className="text-xs capitalize">{country}</p>
      </div>
    </div>
  );
}
