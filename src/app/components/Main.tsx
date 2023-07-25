import Tweet from './Tweet'
import ComposeTweet from './compose-tweet/ComposeTweet'

export default function Main() {
  return (
    <main className="ml-72 p-2">
      <h1 className="text-xl mb-4 font-semibold">Home</h1>
      <ComposeTweet />
      {Array.from({ length: 5 }).map((_, i) => (
        <Tweet key={i} index={i} />
      ))}
    </main>
  )
}
