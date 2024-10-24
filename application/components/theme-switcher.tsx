import { useTheme } from "@/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import { Theme } from "@/types";

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className="">
      <button
        onClick={toggle}
        className="p-2 bg-bkg border text-content rounded-md shadow-md border-content/40"
      >
        {theme === Theme.LIGHT ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
