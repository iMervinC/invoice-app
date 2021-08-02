import { useState, useMemo, createContext, ReactNode } from 'react'
import { ThemeT } from 'utils/types'

export const ThemeContext = createContext<ThemeT>({} as ThemeT)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(true)
  const memTheme = useMemo(() => ({ dark, setDark }), [dark])

  return (
    <ThemeContext.Provider value={memTheme}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
