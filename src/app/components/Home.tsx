import React from 'react'
import ComposeTweet from './compose-tweet/ComposeTweet'
import LeftSidebar from './left-sidebar/LeftSidebar'
import RightSidebar from './right-sidebar/RightSidebar'
import Tweet from './Tweet'

export default function Home() {
  return (
    <div className="relative flex">
      <LeftSidebar />
      <main className="ml-72 p-2">
        <h1 className="text-xl mb-4 font-semibold">Home</h1>
        <ComposeTweet />
        {Array.from({ length: 5 }).map((_, i) => (
          <Tweet key={i} index={i} />
        ))}
      </main>
      <RightSidebar />
    </div>
  )
}
