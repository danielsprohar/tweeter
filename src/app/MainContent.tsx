import { Children } from './types/children'

export default function MainContent({ children }: Children) {
  return <main className="ml-72 flex-1">{children}</main>
}
