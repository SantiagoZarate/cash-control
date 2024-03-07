import { InformationMicroIcon } from "@icon";

export function MoneyHeader() {
  return (
    <header className="flex gap-2 items-center">
      <InformationMicroIcon />
      <h4 className="uppercase text-sm tracking-wider">Your money</h4>
    </header>
  );
}
