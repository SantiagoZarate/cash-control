import { ActionsHeader } from "./ActionsHeader";
import { ActionsList } from "./ActionsList";

export function Actions() {
  return (
    <section className="flex flex-col gap-4 flex-1">
      <ActionsHeader />
      <ActionsList />
    </section>
  );
}
