import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export function RegisterPage() {
  return (
    <section className="min-h-screen font-NunitoSans text-primary grid grid-cols-2 bg-background">
      <RightSide />
      <LeftSide />
    </section>
  );
}
