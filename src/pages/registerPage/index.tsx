import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export function RegisterPage() {
  return (
    <section className="min-h-screen text-primary grid grid-cols-2 bg-background">
      <LeftSide />
      <RightSide />
    </section>
  );
}
