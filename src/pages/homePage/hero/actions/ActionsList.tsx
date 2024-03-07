import { actions } from "@data/actions";
import { ActionCard } from "./ActionCard";
import { ActionProfile } from "./ActionProfile";

export function ActionsList() {
  return (
    <article className="z-10 h-fit grid grid-cols-actions gap-4">
      {actions.map((action) => (
        <ActionCard {...action} />
      ))}
      <ActionProfile />
    </article>
  );
}
