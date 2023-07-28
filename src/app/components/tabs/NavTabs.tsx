import { Children } from '../../types/children'

export default function NavTabs({ children }: Children) {
  return (
    <div className="flex items-center h-full overflow-y-hidden overflow-x-auto">
      {children}
    </div>
  )
}
