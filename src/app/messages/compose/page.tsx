'use client'

import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Modal from '../../components/Modal'
import { ChangeEvent, useState } from 'react'

export default function ComposeMessagePage() {
  const [focused, setFocused] = useState<boolean>(false)
  return (
    <Modal>
      <div className="flex items-center p-3">
        <button title="Close" className="text-xl mr-4">
          <AiOutlineClose />
        </button>
        <h2 className="text-2xl font-bold">New message</h2>
        <button className="ms-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black">
          Next
        </button>
      </div>

      <div className="px-3 flex items-center border-b border-black/10 dark:border-white/10">
        <label className="flex flex-grow items-center">
          <div className="px-2">
            <AiOutlineSearch
              className={
                focused ? 'text-xl text-tweeter-blue' : 'text-xl text-gray-500'
              }
            />
          </div>
          <div className="flex-grow">
            <input
              className="w-full p-3 outline-none bg-inherit"
              type="text"
              autoComplete="list"
              placeholder="Search people"
              autoFocus={false}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e: ChangeEvent) => {
                const input = e.target as HTMLInputElement
                console.log(input.value)
              }}
            />
          </div>
        </label>
      </div>

      <div className="p-3">Search results</div>
    </Modal>
  )
}
