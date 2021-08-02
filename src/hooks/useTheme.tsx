import { useContext, useCallback, useEffect } from 'react'
import { ThemeContext } from 'providers/Theme'

export const useTheme = () => {
  const { dark, setDark } = useContext(ThemeContext)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleTheme = useCallback(() => setDark((_toggle) => !_toggle), [dark])
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return { dark, toggleTheme }
}
