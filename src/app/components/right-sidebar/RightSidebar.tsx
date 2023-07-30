import { Children } from '../../types/children'

export default function RightSidebar({ children }: Children) {
  return (
    <section className="h-screen md:w-[350px] flex flex-col gap-y-4 p-4 border-l border-black/10 dark:border-white/10">
      {children}
    </section>
  )
}
