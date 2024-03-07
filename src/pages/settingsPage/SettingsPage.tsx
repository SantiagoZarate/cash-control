import { Heading } from "@component";
import { useThemeMode } from "@hook/useThemeMode";
import { MoonIcon, SunIcon } from "@icon";

const currencys = ["ars", "rs", "yns", "pnd"];

export function SettingsPage() {
  const { darkMode, toggleMode } = useThemeMode();

  return (
    <section className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 bottom-0 bg-[radial-gradient(#272727_0.5px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <header className="w-full px-20 border-b border-border">
        <nav className="max-w-[1440px] mx-auto flex gap-8">
          <p className="hover:brightness-150 duration-150 transition py-8 min-w-24 border-b-2 border-accent text-center uppercase tracking-wider">
            Settings
          </p>
        </nav>
      </header>
      <article className="p-20 relative w-full h-full flex items-center justify-between gap-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-2">
          <Heading>Local currency</Heading>
          <p className="text-sm text-border-active">
            Discover Real-Time Currency Conversions and Exchange Rates.
          </p>
        </div>
        <select
          className="p-2 rounded-xl bg-card border border-border uppercase w-1/2"
          name=""
          id=""
        >
          {currencys.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
      </article>
      <article className="p-20 relative w-full h-full flex items-center justify-between gap-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-2 w-1/2">
          <Heading>Color Theme</Heading>
          <p className="text-sm text-border-active">
            Customize Your Viewing Experience: Switch between Dark and Light
            Modes effortlessly for personalized readability and comfort
          </p>
        </div>
        <div
          onClick={toggleMode}
          className="cursor-pointer relative w-24 h-12 border border-border grid grid-cols-2 rounded-full p-1 hover:brightness-150 transition-all duration-150 bg-background"
        >
          <span
            className={`relative bg-card border border-border flex items-center justify-center rounded-full duration-150 transition-all ${
              darkMode ? "left-0" : "left-full"
            }`}
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </span>
        </div>
      </article>
    </section>
  );
}
