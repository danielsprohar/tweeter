import SearchBar from './SearchBar'
import StatusGrid from './StatusGrid'
import SuggestedProphets from './SuggestedProphets'

export default function RightSidebar() {
  return (
    <section className="flex flex-col gap-y-4 py-4 pl-4 border-l">
      <SearchBar />
      <StatusGrid />
      <SuggestedProphets />
    </section>
  )
}
