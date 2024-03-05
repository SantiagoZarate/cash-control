import { MoneyDisplay } from "./money/MoneyDisplay";
import "./hero.styles.css";
import { LightImage } from "./LightImage";
import { MoneyActions } from "./actions/MoneyActions";

export function Hero() {
  return (
    <section className="max-w-[1440px] w-full mx-auto hero group/hero relative p-20 py-40 gap-12 flex items-center flex-col lg:flex-row">
      <LightImage />
      <MoneyDisplay />
      <MoneyActions />
    </section>
  );
}
