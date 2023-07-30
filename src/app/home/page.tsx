'use client'

import Tweet from '../components/Tweet'
import ComposeTweet from '../components/compose-tweet/ComposeTweet'
import { NavTab } from '../components/tabs/NavTab'
import NavTabs from '../components/tabs/NavTabs'

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="p-3">
          <h2 className="text-2xl font-semibold">Home</h2>
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
        <Tweet
          key={i}
          index={i}
        />
      ))}
    </>
  )
}
