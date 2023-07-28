import SearchTwitter from '../SearchTwitter'
import StatusGrid from './StatusGrid'
import SuggestedProphets from './SuggestedProphets'

export default function RightSidebar() {
  return (
    <section className="flex flex-col gap-y-4 p-4 border-l">
      <SearchTwitter />
      <StatusGrid />
      <SuggestedProphets />
    </section>
  )
}
