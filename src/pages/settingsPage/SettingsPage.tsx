import { SettingsThemeMode } from "./SettingsThemeMode";
import { SettingsCurrency } from "./SettingsCurrency";

export function SettingsPage() {
  return (
    <section className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 bottom-0 bg-[radial-gradient(#272727_0.5px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <header className="w-full px-20 border-b border-border bg-transparent">
        <nav className="max-w-[1440px] mx-auto flex gap-8">
          <p className="hover:brightness-150 duration-150 transition py-8 min-w-24 border-b-2 border-accent text-center uppercase tracking-wider">
            Settings
          </p>
        </nav>
      </header>
      <SettingsCurrency />
      <SettingsThemeMode />
    </section>
  );
}
