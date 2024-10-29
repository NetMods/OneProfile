'use client'
import { useTheme } from "@/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import { Theme } from "@/lib/constants";
import ClientOnly from "./client-only";

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme()

  return (
    <ClientOnly>
      <div>
        <button
          onClick={() => {
            toggle()
          }}
          className="p-1 bg-bkg border text-content rounded-md shadow-md border-content/40"
        >
          {theme && theme === Theme.LIGHT ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </div>
    </ClientOnly>
  );
};

export default ThemeSwitcher
