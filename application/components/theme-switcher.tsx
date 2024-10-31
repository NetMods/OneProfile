import { useTheme } from "@/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import { Theme } from "@/lib/constants";
import ClientOnly from "./client-only";

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme()

  return (
    <ClientOnly>
      <button
        onClick={() => {
          toggle()
        }}
        className="p-1 bg-bkg border text-content rounded-md shadow-sm border-content/40"
      >
        {theme && theme === Theme.LIGHT ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
    </ClientOnly>
  );
};

export default ThemeSwitcher
