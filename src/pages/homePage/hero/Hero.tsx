import { Actions } from "./actions/Actions";
import { MoneyDisplay } from "./money/MoneyDisplay";
import { BackgroundImage } from "./BackgroundImage";
import "./hero.styles.css";

export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1440px] scroll-smooth w-full mx-auto hero group/hero relative p-20 py-40 gap-12 flex items-center flex-col lg:flex-row"
    >
      <BackgroundImage />
      <MoneyDisplay />
      <Actions />
    </section>
  );
}
