import { ExtractMoneyIcon, FundMoneyIcon, SendIcon } from "@icon";
import { ActionCard } from "../ActionCard";

const actions = [
  {
    icon: ExtractMoneyIcon,
    url: "/extract",
    text: "extract",
    description: "Need cash? No problem. Get cash when you need it.",
  },
  {
    icon: FundMoneyIcon,
    url: "/add",
    text: "add",
    description: "Easily boost your funds with just a few clicks.",
  },
  {
    icon: SendIcon,
    url: "/send",
    text: "send",
    description: "Send money effortlessly to friends, family, or businesses",
  },
];

export function MoneyActions() {
  return (
    <section className="col-span-2 flex flex-col gap-4 flex-1">
      <header className="flex justify-between">
        <p className="uppercase tracking-widest">Actions</p>
        <h3 className="text-primary-fg tracking-wide">
          Manage Your Money Seamlessly
        </h3>
      </header>
      <article className=" z-10 h-fit grid grid-cols-actions-responsive gap-4">
        {actions.map((action) => (
          <ActionCard {...action} />
        ))}
      </article>
    </section>
  );
}
