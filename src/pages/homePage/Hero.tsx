import { ExtractMoneyIcon, FundMoneyIcon, SendIcon } from "@icon";
import { ActionCard } from "./ActionCard";
import { MoneyDisplay } from "./MoneyDisplay";

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

export function Hero() {
  return (
    <section className="relative p-20 gap-8 grid grid-cols-3 items-center ">
      <MoneyDisplay />
      <article className="col-span-2 h-fit flex justify-center flex-wrap gap-4">
        {actions.map((action) => (
          <ActionCard {...action} />
        ))}
      </article>
    </section>
  );
}
