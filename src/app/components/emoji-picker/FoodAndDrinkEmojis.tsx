import React from 'react'
import data from '../../../../json/food-drink-00.json'

export default function FoodAndDrinkEmojis() {
  return (
    <div className="emojis-container">
      {data.emojis.map((item) => (
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
