import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { RecentMovements } from "./recentMovements/RecentMovements";

export function HomePage() {
  return (
    <section className="relative flex flex-col divide-y divide-border ">
      <Header />
      <Hero />
      <RecentMovements />
    </section>
  );
}
