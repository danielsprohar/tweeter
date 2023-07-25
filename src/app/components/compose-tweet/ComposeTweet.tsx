'use client'

import { SyntheticEvent, useState } from 'react'
import ComposeTweetToolbar from './ComposeTweetToolbar'

export default function ComposeTweet() {
  const [hashtags, setHashtags] = useState<string[]>([])
  const hashtagRegex = new RegExp(/(#)\w+/, 'g')

  function handleInput(event: SyntheticEvent) {
    const input: string = (event.target as HTMLInputElement).value
    if (input.length === 0) {
      setHashtags([])
      return
    }
    const matches: RegExpMatchArray | null = input.match(hashtagRegex)
    if (matches) {
      setHashtags(matches)
    }
  }

  return (
    <div className="border-t border-b border-black/10 dark:border-white/10 p-2">
      <div className="flex gap-x-4">
        <div className="rounded-full bg-indigo-500 w-12 h-12 p-2"></div>
        <div className="flex flex-col gap-y-2 w-full">
          <div className="flex flex-col gap-y-2 py-4">
            <input
              type="text"
              id="tweetText"
              name="tweetText"
              onInput={handleInput}
              className="w-full bg-inherit outline-none text-xl"
              placeholder="What is happening?"
            />
            <div className="flex items-center gap-x-4">
              {hashtags.map((hashtag, i) => (
                <div
                  key={i}
                  className="bg-tweeter-blue text-white font-semibold rounded-full px-4 py-2"
                >
                  {hashtag}
                </div>
              ))}
            </div>
          </div>
          <ComposeTweetToolbar />
        </div>
      </div>
    </div>
  )
}
