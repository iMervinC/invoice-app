import type { Dispatch, SetStateAction } from 'react'

export type ThemeT = {
  dark: boolean
  setDark: Dispatch<SetStateAction<boolean>>
}
