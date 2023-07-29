import SearchTwitter from '../SearchTwitter'
import StatusGrid from './StatusGrid'
import SuggestedProphets from './SuggestedProphets'

export default function RightSidebar() {
  return (
    <section className="h-screen flex flex-col gap-y-4 p-4 border-l border-black/10 dark:border-white/10">
      <SearchTwitter />
      <StatusGrid />
      <SuggestedProphets />
    </section>
  )
}
