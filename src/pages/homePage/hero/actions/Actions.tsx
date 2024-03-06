import { ExtractMoneyIcon, FundMoneyIcon, SendIcon } from "@icon";
import { ActionCard } from "./ActionCard";
import { ActionsHeader } from "./ActionsHeader";
import { ActionProfile } from "./ActionProfile";

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

export function Actions() {
  return (
    <section className="flex flex-col gap-4 flex-1">
      <ActionsHeader />
      <article className="z-10 h-fit grid grid-cols-actions gap-4">
        {actions.map((action) => (
          <ActionCard {...action} />
        ))}
        <ActionProfile />
      </article>
    </section>
  );
}
