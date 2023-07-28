import React, { useContext } from 'react'
import { MenuContext, MenuState } from './MenuContext'

export interface MenuTriggerButtonProps {
  ariaLabel: string
  children: React.ReactNode
  title: string
}

export function MenuTriggerButton({
  ariaLabel,
  children,
  title,
}: MenuTriggerButtonProps) {
  const { hidden, setHidden } = useContext<MenuState>(MenuContext)

  function closeMenuOnEscape(event: globalThis.KeyboardEvent) {
    if (event.key === 'Escape') {
      setHidden(true)
    }
  }

  function toggleMenu() {
    setHidden(!hidden)

    if (!hidden) {
      document.removeEventListener('keydown', closeMenuOnEscape)
    } else {
      document.addEventListener('keydown', closeMenuOnEscape)
    }
  }

  return (
    <button
      onClick={toggleMenu}
      className="rounded-full p-2 hover:text-tweeter-blue hover:bg-tweeter-blue/10 dark:hover:tweeter-blue/10"
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  )
}
