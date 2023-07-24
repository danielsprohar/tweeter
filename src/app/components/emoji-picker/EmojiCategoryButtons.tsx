import React from 'react'
import { EmojiCategory } from '../../enums/emoji-category'

export default function EmojiCategoryButtons() {
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

  function scrollToActivityCategory() {
    const element = document.getElementById(EmojiCategory.ACTIVITY)
    if (element) {
      element.scrollIntoView()
    }
  }

  function scrollToTravelAndPlacesCategory() {
    const element = document.getElementById(EmojiCategory.TRAVEL_AND_PLACES)
    if (element) {
      element.scrollIntoView()
    }
  }

  function scrollToObjectsCategory() {
    const element = document.getElementById(EmojiCategory.OBJECTS)
    if (element) {
      element.scrollIntoView()
    }
  }

  function scrollToSymbolsCategory() {
    const element = document.getElementById(EmojiCategory.SYMBOLS)
    if (element) {
      element.scrollIntoView()
    }
  }

  return (
    <div className="flex items-center gap-x-2 text-center p-2">
      <button
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 flex-1"
        title="Smileys & people"
        onClick={scrollToSmileysAndPeopleCategory}
        aria-label={`${EmojiCategory.SMILEYS_AND_PEOPLE}`}
      >
        😀
      </button>
      <button
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 flex-1"
        title="Animals & nature"
        onClick={scrollToAnimalsAndNatureCategory}
        aria-label={`${EmojiCategory.ANIMALS_AND_NATURE}`}
      >
        🐻
      </button>
      <button
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 flex-1"
        title="Food & drink"
        onClick={scrollToFoodAndDrinkCategory}
        aria-label={`${EmojiCategory.FOOD_AND_DRINK}`}
      >
        🍔
      </button>
      <button
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 flex-1"
        title="Activity"
        onClick={scrollToActivityCategory}
        aria-label={`${EmojiCategory.ACTIVITY}`}
      >
        ⚽
      </button>
      <button
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 flex-1"
        title="Travel & places"
        onClick={scrollToTravelAndPlacesCategory}
        aria-label={`${EmojiCategory.TRAVEL_AND_PLACES}`}
      >
        🚗
      </button>
      <button
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 flex-1"
        title="Objects"
        onClick={scrollToObjectsCategory}
        aria-label={`${EmojiCategory.OBJECTS}`}
      >
        💡
      </button>
      <button
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 flex-1"
        title="Symbols"
        onClick={scrollToSymbolsCategory}
        aria-label={`${EmojiCategory.SYMBOLS}`}
      >
        ⚛️
      </button>
    </div>
  )
}
