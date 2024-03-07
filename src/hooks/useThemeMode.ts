import { useState } from "react";

export function useThemeMode() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  const changeTheme = () => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  changeTheme();

  const toggleMode = () => {
    if (theme !== "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("ligth");
      localStorage.removeItem("theme");
    }
    changeTheme();
  };

  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("theme-mode") === "dark"
  // );

  // const toggleMode = () => {
  //   if (darkMode) {
  //     localStorage.setItem("theme-mode", "light");
  //     document.documentElement.removeAttribute("data-theme");
  //   } else {
  //     localStorage.setItem("theme-mode", "dark");
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   }
  //   setDarkMode(!darkMode);
  // };

  return {
    toggleMode,
    darkMode: theme === "dark",
  };
}
