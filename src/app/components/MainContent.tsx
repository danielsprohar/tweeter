import { Children } from '../types/children'

export default function MainContent({ children }: Children) {
  return <main className="sm:ml-20 lg:ml-72 flex-1">{children}</main>
}
