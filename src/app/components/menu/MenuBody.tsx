import { useContext } from 'react'
import { Children } from '../../types/children'
import { MenuContext } from './MenuContext'

export default function MenuBody({ children }: Children) {
  const {hidden} = useContext(MenuContext)
  
  return (
    <div
      data-testid="dropdown"
      className={
        hidden
          ? 'hidden w-fit absolute right-0 shadow-lg dark:shadow-white/10 rounded-xl z-10 overflow-hidden'
          : 'w-fit absolute right-0 shadow-lg dark:shadow-white/10 rounded-xl z-10 overflow-hidden'
      }
    >
      <ul className="list-none m-0 p-0">
        {children}
      </ul>
    </div>
  )
}
