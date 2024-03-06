type Props = {
  day: string;
  year: number;
};

export function TableDate({ day, year }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="capitalize">{day},</p>
      <p>{year}</p>
    </div>
  );
}
