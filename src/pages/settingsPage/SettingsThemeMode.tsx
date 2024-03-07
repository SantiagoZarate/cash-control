import { Heading } from "@component";
import { useThemeMode } from "@hook/useThemeMode";
import { MoonIcon, SunIcon } from "@icon";

export function SettingsThemeMode() {
  const { darkMode, toggleMode } = useThemeMode();

  return (
    <article className="p-20 relative w-full h-full flex items-center justify-between gap-4 max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-2 w-1/2">
        <Heading>Color Theme</Heading>
        <p className="text-sm text-border-active">
          Customize Your Viewing Experience: Switch between Dark and Light Modes
          effortlessly for personalized readability and comfort
        </p>
      </div>
      <div
        onClick={toggleMode}
        className="cursor-pointer relative w-24 h-12 border border-border grid grid-cols-2 rounded-full p-1 hover:opacity-50 transition-all duration-150 bg-background"
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
  );
}
