import { useTheme } from '@/hooks/useTheme'
import { FiMoon, FiSun } from 'react-icons/fi'
import { Theme } from '@/lib/constants'

const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme()

  return (
    <span
      onClick={toggle}
      className="p-2 bg-bkg border text-content rounded-md shadow-md border-content/40"
    >
      {theme === Theme.LIGHT ? <FiSun size={20} /> : <FiMoon size={20} />}
    </span>
  )
}

export default ThemeSwitcher
