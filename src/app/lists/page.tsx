'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {
  MdMoreHoriz,
  MdOutlineKeyboardBackspace,
  MdPlaylistAdd,
} from 'react-icons/md'

export default function ListsPage() {
  const router = useRouter()
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false)

  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <div className="flex items-center py-4 px-1">
        <div className="flex">
          <button
            onClick={() => router.push('/messages')}
            title="Close"
            aria-label="Close dialog"
            className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10 text-xl mr-4"
          >
            <MdOutlineKeyboardBackspace />
          </button>
        </div>

        {/* Search for lists */}
        <div className="relative flex flex-grow">
          <label
            htmlFor="searchListsInput"
            className={
              inputIsFocused
                ? 'p-2 rounded-full flex items-center flex-grow bg-gray-100 dark:bg-white/10 border border-tweeter-blue'
                : 'p-2 rounded-full flex items-center flex-grow bg-gray-100 dark:bg-white/10 border border-transparent'
            }
          >
            <div className="flex mr-2 p-2">
              <AiOutlineSearch
                className={
                  inputIsFocused ? 'text-tweeter-blue' : 'text-gray-400'
                }
              />
            </div>
            <input
              className="w-full outline-none bg-transparent"
              id="searchListsInput"
              type="text"
              placeholder="Search lists"
              onFocus={() => setInputIsFocused(true)}
              onBlur={() => setInputIsFocused(false)}
            />
          </label>
        </div>

        <div className="flex items-center ml-1">
          <Link
            className="p-2 mr-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-xl"
            href={'/i/lists/create'}
            title="New list"
            aria-label="Create a new list"
          >
            <MdPlaylistAdd />
          </Link>
          <div className="relative">
            <button
              onClick={() => {}}
              className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10 text-xl mr-4"
              title="More"
              aria-label="More"
            >
              <MdMoreHoriz />
            </button>
          </div>
        </div>
        <div className="flex"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col">Content</div>
    </div>
  )
}
