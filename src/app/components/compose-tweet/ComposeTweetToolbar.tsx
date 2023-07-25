'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { FaSmile } from 'react-icons/fa'
import { GoFileMedia } from 'react-icons/go'
import { MdLocationPin } from 'react-icons/md'
import { TbCalendarTime } from 'react-icons/tb'
import EmojiPicker from '../emoji-picker/EmojiPicker'

interface ComposeTweetToolbarProps {
  onOpenPoll: () => void
}

export default function ComposeTweetToolbar({
  onOpenPoll,
}: ComposeTweetToolbarProps) {
  const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false)
  const router = useRouter()

  function uploadMedia() {
    const input = document.createElement('input')

    input.type = 'file'
    input.accept = 'image/png, image/jpeg'
    input.onchange = (_) => {
      const file = input.files?.item(0)
      if (file) {
        console.log('file.name', file.name)
        console.log('file.size', file.size)
      }
    }

    input.click()
  }

  function openGiphyGrid() {
    router.push('/i/foundmedia/search')
  }

  return (
    <div className="flex items-center justify-between w-full py-2 border-t dark:border-white/10 border-black/10">
      <div className="flex gap-x-2">
        <button
          onClick={uploadMedia}
          title="Media"
          aria-label="Add media"
          className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20"
        >
          <GoFileMedia />
        </button>
        <button
          onClick={openGiphyGrid}
          title="GIF"
          aria-label="Add a GIF"
          className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20"
        >
          <AiOutlineGif />
        </button>
        <button
          onClick={onOpenPoll}
          title="Poll"
          aria-label="Create a poll"
          className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20"
        >
          <BiPoll />
        </button>
        <div className="relative">
          <button
            onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
            title="Emoji"
            aria-label="Add an emoji"
            className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20"
          >
            <FaSmile />
          </button>
          <div
            className={
              openEmojiPicker
                ? 'rounded-xl absolute z-10 dark:bg-black bg-white'
                : 'hidden rounded-xl absolute z-10 dark:bg-black bg-white'
            }
          >
            <EmojiPicker />
          </div>
        </div>
        <button
          title="Schedule"
          aria-label="Schedule a tweet"
          className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20"
        >
          <TbCalendarTime />
        </button>
        <button
          title="Location"
          aria-label="Tag location"
          className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20"
        >
          <MdLocationPin />
        </button>
      </div>
      <div>
        <button className="rounded-full bg-tweeter-blue text-white px-4 py-2 font-semibold">
          Tweet
        </button>
      </div>
    </div>
  )
}
