import { useTheme } from "@/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import { Theme } from "@/lib/constants";

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme()

  return (
    <div>
      <button
        onClick={() => {
          toggle()
        }}
        className="p-2 bg-bkg border text-content rounded-md shadow-md border-content/40"
      >
        { theme && theme === Theme.LIGHT ? <FiMoon size={28} /> : <FiSun size={28}/> }
      </button>
    </div>
  );
};

export default ThemeSwitcher
