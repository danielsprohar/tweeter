import { createContext } from 'react'

export interface MenuState {
  hidden: boolean
  setHidden: (value: boolean) => void
}

export const MenuContext = createContext<MenuState>({
  hidden: true,
  setHidden: () => {},
})
