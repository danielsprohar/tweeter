'use client'

import twitterLists from '@/../json/twitter-lists.json'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {
  MdAdd,
  MdListAlt,
  MdMoreHoriz,
  MdOutlineKeyboardBackspace,
  MdPlaylistAdd,
} from 'react-icons/md'
import Menu from '../components/menu/Menu'
import MenuBody from '../components/menu/MenuBody'
import MenuItem from '../components/menu/MenuItem'
import { MenuTriggerButton } from '../components/menu/MenuTriggerButton'

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
          <Menu>
            <MenuTriggerButton
              ariaLabel="More"
              title="More"
            >
              <MdMoreHoriz />
            </MenuTriggerButton>
            <MenuBody>
              <MenuItem>
                <Link
                  href="/lists/memberships"
                  className="flex items-center gap-x-2 p-2"
                >
                  <MdListAlt />
                  <span>Lists your on</span>
                </Link>
              </MenuItem>
            </MenuBody>
          </Menu>
        </div>
        <div className="flex"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-y-4 px-3">
        <section className="flex flex-col">
          <h2 className="font-bold text-2xl">Pinned Lists</h2>
          <p className="mt-2 text-gray-500">
            {
              'Nothing to see here, yet -- pin your favorite lists to access them quickly.'
            }
          </p>
        </section>
        <section className="py-3 flex flex-col border-y border-black/20 dark:border-white/20">
          <h2 className="font-bold text-2xl">Discover new lists</h2>
          <ul className="flex flex-col mt-3 gap-y-3">
            {twitterLists.map((list) => (
              <li
                key={list.name}
                className="flex items-center gap-x-3"
              >
                <div className="flex items-stretch">
                  <div className="p-4 rounded-xl bg-slate-300 dark:bg-slate-500 ">
                    <MdListAlt className="text-gray-400 text-3xl" />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <p>
                    <span className="font-bold">{list.name}</span>
                    <span className="text-gray-500">{` ${list.memberCount} members`}</span>
                  </p>
                  <div className="flex items-center gap-x-2">
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full bg-red-400"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-400 -ml-2"></div>
                      <div className="w-6 h-6 rounded-full bg-green-400 -ml-2"></div>
                    </div>
                    <span className="text-gray-500">
                      {`[n] followers including @[your_friend]`}
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <button
                    aria-label="Add list"
                    title="Add list"
                    className="text-2xl rounded-full p-2 bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                  >
                    <MdAdd />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex w-full">
            <Link
              href={'/i/lists/suggested'}
              className="pt-4 pb-1 font-semibold text-tweeter-blue flex-grow"
            >
              Show more
            </Link>
          </div>
        </section>

        <section className="py-3 flex flex-col">
          <h2 className="font-bold text-2xl">Your Lists</h2>
          <p className="text-gray-500">
            You haven't created or followed any Lists. When you do, they'll show
            up here.
          </p>
        </section>
      </div>
    </div>
  )
}
