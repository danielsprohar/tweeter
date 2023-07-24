'use client'

import activityEmojis from '@/../json/emojis/activities.json'
import animalsNatureEmojis from '@/../json/emojis/animals-nature.json'
import foodDrinkEmojis from '@/../json/emojis/food-drink.json'
import objectsEmojis from '@/../json/emojis/objects.json'
import peopleEmojis from '@/../json/emojis/people.json'
import smileysEmojis from '@/../json/emojis/smileys.json'
import symbolsEmojis from '@/../json/emojis/symbols.json'
import travelPlacesEmojis from '@/../json/emojis/travel-places.json'

import { MouseEvent, useState } from 'react'
import { EmojiCategory } from '../../enums/emoji-category'
import EmojiCategoryButtons from './EmojiCategoryButtons'
import EmojiCategoryGrid from './EmojiCategoryGrid'

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

  return (
    <div className="w-fit rounded-xl shadow-lg dark:shadow-white dark:shadow z-10">
      <div className="flex flex-col overflow-x-hidden shadow-inner rounded-xl">
        {/* Search bar */}
        <div className="p-2">
          <div className="flex items-center gap-x-2">
            <input
              type="text"
              placeholder="Search emojis"
              className="w-full rounded-full outline-none border bg-inherit dark:border-white/10 border-black/10 text-inherit p-2 focus:border-tweeter-blue"
            />
          </div>
        </div>

        {/* Button bar */}
        <EmojiCategoryButtons />

        {/* Emoji grid */}
        <div
          role="listbox"
          className="w-[320px] h-[250px] overflow-y-scroll border-y dark:border-white/10"
        >
          {/* Wrapper */}
          <div
            onClick={handleSelectedEmoji}
            onMouseOver={handleMouseOver}
            className="flex flex-col gap-y-4 px-2"
          >
            {/* Smileys & people */}
            <EmojiCategoryGrid
              category={EmojiCategory.SMILEYS_AND_PEOPLE}
              emojis={[...smileysEmojis, ...peopleEmojis]}
            />

            {/* Animals & nature */}
            <EmojiCategoryGrid
              category={EmojiCategory.ANIMALS_AND_NATURE}
              emojis={animalsNatureEmojis}
            />

            {/* Food & drink */}
            <EmojiCategoryGrid
              category={EmojiCategory.FOOD_AND_DRINK}
              emojis={foodDrinkEmojis}
            />

            {/* Activity */}
            <EmojiCategoryGrid
              category={EmojiCategory.ACTIVITY}
              emojis={activityEmojis}
            />

            {/* Travel & places */}
            <EmojiCategoryGrid
              category={EmojiCategory.TRAVEL_AND_PLACES}
              emojis={travelPlacesEmojis}
            />

            {/* Objects */}
            <EmojiCategoryGrid
              category={EmojiCategory.OBJECTS}
              emojis={objectsEmojis}
            />

            {/* Symbols */}
            <EmojiCategoryGrid
              category={EmojiCategory.SYMBOLS}
              emojis={symbolsEmojis}
            />
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
