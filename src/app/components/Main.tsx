'use client'

import Tweet from './Tweet'
import ComposeTweet from './compose-tweet/ComposeTweet'
import {NavTab} from './tabs/NavTab'
import NavTabs from './tabs/NavTabs'

export default function Main() {
  return (
    <main className="ml-72 py-2">
      <div className="sticky top-0 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="px-4">
          <h1 className="text-xl mb-4 font-semibold">Home</h1>
        </div>
        <NavTabs>
          <NavTab
            href={'/home'}
            displayText={'For you'}
            isActive={true}
            onClick={(event: MouseEvent) => {
              event.preventDefault()
              console.log('For you')              
            }}
          ></NavTab>
          <NavTab
            href={'/home'}
            displayText={'Following'}
            isActive={false}
            onClick={(event: MouseEvent) => {
              event.preventDefault()
              console.log('Following')              
            }}
          ></NavTab>
        </NavTabs>
      </div>

      <ComposeTweet />

      {Array.from({ length: 5 }).map((_, i) => (
        <Tweet key={i} index={i} />
      ))}
    </main>
  )
}
