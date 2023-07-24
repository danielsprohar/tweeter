import React from 'react'
import animalsAndNature from '../../../../json/animals-nature-00.json'

export default function AnimalsAndNatureEmojis() {
  return (
    <div className="grid grid-cols-9 cursor-pointer text-center">
      {animalsAndNature.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
    </div>
  )
}
