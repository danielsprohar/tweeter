'use client'

import { MouseEvent, useState } from 'react'
import { EmojiCategory } from '../../enums/emoji-category'
import AnimalsAndNatureEmojis from './AnimalsAndNatureEmojis'
import FoodAndDrinkEmojis from './FoodAndDrinkEmojis'
import SmileysAndPeopleEmojis from './SmileysAndPeopleEmojis'

export default function EmojiPicker() {
  const [emojiHTML, setEmojiHTML] = useState<string>('')
  const [emojiName, setEmojiName] = useState<string>('')

  function handleMouseOver(e: MouseEvent) {
    const emojiDiv = e.target as HTMLDivElement
    if (emojiDiv.ariaLabel) {
      setEmojiHTML(emojiDiv.innerHTML)
      setEmojiName(emojiDiv.ariaLabel)
    }
  }

  function handleSelectedEmoji(e: MouseEvent) {
    // TODO: Set the selected emoji
    // Set "aria-selected=true"
  }

  function scrollToSmileysAndPeopleCategory() {
    const element = document.getElementById(EmojiCategory.SMILEYS_AND_PEOPLE)
    if (element) {
      element.scrollIntoView()
    }
  }

  function scrollToAnimalsAndNatureCategory() {
    const element = document.getElementById(EmojiCategory.ANIMALS_AND_NATURE)
    if (element) {
      element.scrollIntoView()
    }
  }

  function scrollToFoodAndDrinkCategory() {
    const element = document.getElementById(EmojiCategory.FOOD_AND_DRINK)
    if (element) {
      element.scrollIntoView()
    }
  }

  return (
    <div className="w-fit rounded-xl shadow-lg dark:shadow-white dark:shadow z-10">
      <div className="flex flex-col overflow-x-hidden shadow-inner rounded-xl">
        <div>Search bar</div>
        <div className="flex items-center gap-x-2 text-center p-2">
          <button
            className="emoji-btn"
            onClick={scrollToSmileysAndPeopleCategory}
            aria-label={`${EmojiCategory.SMILEYS_AND_PEOPLE}`}
          >
            😀
          </button>
          <button
            className="emoji-btn"
            onClick={scrollToAnimalsAndNatureCategory}
            aria-label={`${EmojiCategory.ANIMALS_AND_NATURE}`}
          >
            🐻
          </button>
          <button
            className="emoji-btn"
            onClick={scrollToFoodAndDrinkCategory}
            aria-label={`${EmojiCategory.FOOD_AND_DRINK}`}
          >
            🍔
          </button>
          <button
            className="emoji-btn"
            aria-label={`${EmojiCategory.ACTIVITY}`}
          >
            ⚽
          </button>
          <button
            className="emoji-btn"
            aria-label={`${EmojiCategory.TRAVEL_AND_PLACES}`}
          >
            🚗
          </button>
          <button className="emoji-btn" aria-label={`${EmojiCategory.OBJECTS}`}>
            💡
          </button>
          <button className="emoji-btn" aria-label={`${EmojiCategory.SYMBOLS}`}>
            ⚛️
          </button>
        </div>

        {/* Emoji grid */}
        <div role="listbox" className="w-[320px] h-[250px] overflow-y-scroll">
          {/* Wrapper */}
          <div
            onClick={handleSelectedEmoji}
            onMouseOver={handleMouseOver}
            className="flex flex-col gap-y-4 px-2"
          >
            {/* Smileys & people */}
            <div
              role="group"
              aria-label={`${EmojiCategory.SMILEYS_AND_PEOPLE}`}
              id={`${EmojiCategory.SMILEYS_AND_PEOPLE}`}
            >
              <div className="text-xl font-bold">
                {EmojiCategory.SMILEYS_AND_PEOPLE}
              </div>
              <SmileysAndPeopleEmojis />
            </div>

            {/* Animals & nature */}
            <div
              role="group"
              aria-label={`${EmojiCategory.ANIMALS_AND_NATURE}`}
              id={`${EmojiCategory.ANIMALS_AND_NATURE}`}
            >
              <div className="text-xl font-bold">
                {EmojiCategory.ANIMALS_AND_NATURE}
              </div>
              <AnimalsAndNatureEmojis />
            </div>

            {/* Food & drink */}
            <div
              role="group"
              aria-label={`${EmojiCategory.FOOD_AND_DRINK}`}
              id={`${EmojiCategory.FOOD_AND_DRINK}`}
            >
              <div className="text-xl font-bold">
                {EmojiCategory.FOOD_AND_DRINK}
              </div>
              <FoodAndDrinkEmojis />
            </div>
          </div>
        </div>

        {/* Emoji preview */}
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <div className="text-2xl mr-1">{emojiHTML}</div>
            <div className="text-ellipsis whitespace-nowrap">
              <span className="text-sm text-gray-500">{emojiName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
