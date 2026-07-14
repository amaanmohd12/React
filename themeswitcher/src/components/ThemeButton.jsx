import React from "react";
import useTheme from "../context/Theme";

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeButton = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Switch theme
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          aria-label="Toggle theme"
          onChange={onChangeButton}
          checked={themeMode === "dark"}
        />
        <div className="w-24 h-12 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-300 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400 text-lg">
            ☀️
          </span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-200 text-lg">
            🌙
          </span>
          <div
            className="pointer-events-none absolute left-1 top-1 w-10 h-10 bg-white rounded-full shadow-md transition-transform duration-300 flex items-center justify-center text-slate-900 dark:text-slate-900"
            style={{
              transform:
                themeMode === "dark" ? "translateX(3rem)" : "translateX(0)",
            }}
          >
            {themeMode === "dark" ? "🌜" : "☀️"}
          </div>
        </div>
      </label>
    </div>
  );
}
