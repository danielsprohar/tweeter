import SearchBar from "./SearchBar";
import StatusGrid from "./StatusGrid";
import SuggestedProphets from "./SuggestedProphets";

export default function RightSidebar() {
  return (
    <section className="py-4 px-2 flex flex-col gap-y-4">
      <SearchBar />
      <StatusGrid />
      <SuggestedProphets />
    </section>
  );
}