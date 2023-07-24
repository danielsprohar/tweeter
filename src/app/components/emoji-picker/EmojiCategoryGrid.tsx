import React from 'react'
import { Emoji } from '../../models/emoji.model'
import { EmojiCategory } from '../../enums/emoji-category'

interface Props {
  category: EmojiCategory
  emojis: Emoji[]
}

export default function EmojiCategoryGrid({ category, emojis }: Props) {
  return (
    <div role="group" aria-label={`${category}`} id={`${category}`}>
      <div className="text-xl font-bold">{category}</div>
      <div className="grid grid-cols-9 cursor-pointer text-center">
        {emojis.map((emoji: Emoji) => (
          <div
            role="option"
            className="rounded hover:bg-black/10 dark:hover:bg-white/10"
            aria-selected="false"
            key={emoji.annotation}
            title={`${emoji.annotation}`}
            aria-label={`${emoji.annotation}`}
          >
            {emoji.emoji}
          </div>
        ))}
      </div>
    </div>
  )
}
