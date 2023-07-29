'use client'

import { Children } from '../../types/children'

export default function NavTabs({ children }: Children) {
  return (
    <nav className="h-full overflow-y-hidden overflow-x-auto border-b border-black/10 dark:border-white/10">
      <ul className="list-none m-0 p-0 flex items-center">{children}</ul>
    </nav>
  )
}
