import { Children } from '../../types/children'

export default function MenuItem({ children }: Children) {
  return (
    <li className="whitespace-nowrap flex items-center gap-x-2 px-3 py-2 hover:bg-black/10 dark:hover:bg-white/10">
      {children}
    </li>
  )
}
