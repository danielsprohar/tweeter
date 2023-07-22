'use client'

import { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function AccountMenu() {
  const hoverEffect =
    'dark:hover:bg-white/10 hover:bg-black/10 transition duration-200'

  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggleMenu() {
    setIsOpen(!isOpen)

    /**
     * @see https://react.dev/reference/react/useState#setstate-caveats
     * The set function only updates the state variable for the next render. 
     * If you read the state variable after calling the set function, 
     * you will still get the old value that was on the screen before your call.
     */
    if (!isOpen) {
      addEventListener('keydown', handleKeydown)
    } else {
      removeEventListener('keydown', handleKeydown)
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeMenu()
    }
  }

  function closeMenu() {
    console.log('[closeMenu] removing event listener')
    removeEventListener('keydown', handleKeydown)
    setIsOpen(false)
  }

  function logout() {
    // TODO: Logout
    closeMenu()
  }

  return (
    <div
      aria-label="Account menu"
      role="button"
      className={
        isOpen
          ? 'relative flex items-center justify-between px-4 py-2 rounded-full w-full'
          : `relative flex items-center justify-between px-4 py-2 rounded-full w-full ${hoverEffect}`
      }
    >
      <div className="flex gap-x-2">
        {/* User avatar */}
        <div className="w-10 h-10 rounded-full bg-slate-300"></div>

        <div className="flex flex-col">
          <div className="font-bold">John Doe</div>
          <div className="font-gray-500">
            <span dangerouslySetInnerHTML={{ __html: '&#64;' }}></span>
            johndoe
          </div>
        </div>
      </div>

      <button onClick={toggleMenu}>
        <FiMoreHorizontal />
      </button>
      <div
        className={
          isOpen
            ? 'absolute rounded-2xl overflow-hidden shadow-xl dark:shadow-white/10 flex flex-col w-full left-0 right-0 bottom-20 border dark:border-white/10'
            : 'hidden'
        }
        role="menu"
      >
        <button
          role="menuitem"
          className={`font-bold text-lg p-4 ${hoverEffect}`}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
