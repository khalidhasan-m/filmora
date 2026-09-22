import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label={isDark ? "Switch to Day mode" : "Switch to Night mode"}
      title={isDark ? "Switch to Day mode" : "Switch to Night mode"}
      className={`relative inline-flex items-center justify-center p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-[#141724] border-white/10 text-amber-400 hover:text-amber-300 hover:border-amber-400/40 hover:bg-[#1c2033]"
          : "bg-slate-100 border-slate-300 text-amber-600 hover:text-amber-700 hover:border-amber-500/50 hover:bg-slate-200"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 absolute transition-all duration-300 transform ${
            isDark
              ? "opacity-0 rotate-90 scale-50 pointer-events-none"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`w-5 h-5 absolute transition-all duration-300 transform ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50 pointer-events-none"
          }`}
        />
      </div>
    </button>
  );
}
