import { ReactNode } from 'react'
import ThemeProvider from 'providers/Theme'

const Provider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Provider
