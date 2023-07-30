import { Children } from '../../types/children'

export default function MenuItem({ children }: Children) {
  return (
    <li className="whitespace-nowrap flex items-center gap-x-2 px-3 py-2 bg-white text-black dark:bg-black dark:text-white z-50 hover:bg-black/10 dark:hover:bg-white/10">
      {children}
    </li>
  )
}
