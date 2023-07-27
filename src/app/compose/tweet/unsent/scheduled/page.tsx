'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import Home from '../../../../components/Home'
import Modal from '../../../../components/Modal'

export default function UnsentScheduledTweets() {
  const router = useRouter()

  return (
    <>
      <Home />
      <Modal>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => router.back()}
              className="p-2 rounded-full hover:dark:bg-white/10 hover:bg-black/10"
            >
              <IoMdArrowBack />
            </button>
            <h2 className="text-xl">Drafts</h2>
          </div>
        </div>

        <div className="flex items-stretch border-b dark:border-white/20 border-black/20">
          <div className="flex-grow dark:hover:bg-white/10 hover:bg-black/10 cursor-pointer">
            <div className="flex justify-center">
              <Link
                href="/compose/tweet/unsent/drafts"
                className="p-4 font-semibold text-gray-500"
              >
                Unsent Tweets
              </Link>
            </div>
          </div>
          <div className="flex-grow dark:hover:bg-white/10 hover:bg-black/10 cursor-pointer">
            <div className="flex justify-center">
              <Link
                href="/compose/tweet/unsent/scheduled"
                className="border-b-4 border-tweeter-blue p-4 font-semibold"
              >
                Scheduled
              </Link>
            </div>
          </div>
        </div>

        <div className="flex p-4">
          <div className="flex flex-col gap-y-2 justify-center">
            <h3 className="text-2xl font-bold">Hold That Thought!</h3>
            <div className="flex">
              <p className="text-gray-500">
                Not ready to send a Tweet just yet? Save it to your drafts or
                schedule it for later.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
