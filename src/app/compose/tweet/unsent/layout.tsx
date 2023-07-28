'use client'

import { IoMdArrowBack } from 'react-icons/io'
import Home from '../../../components/Home'
import Modal from '../../../components/Modal'
import { Children } from '../../../types/children'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function UnsentTweetsLayout({ children }: Children) {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <>
      <Home />
      <Modal>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => router.push('/compose/tweet/schedule')}
              className="p-2 rounded-full hover:dark:bg-white/10 hover:bg-black/10"
              title="Back"
              aria-label="Go back to scheduling a tweet"
            >
              <IoMdArrowBack />
            </button>
            <h2 className="text-xl">Drafts</h2>
          </div>
        </div>

        <div className="flex items-center h-full overflow-y-hidden overflow-x-auto">
          <div className="flex flex-1 dark:hover:bg-white/10 hover:bg-black/10 cursor-pointer">
            <Link
              href="/compose/tweet/unsent/drafts"
              className="font-semibold w-full"
            >
              <div className="flex justify-center">
                <div
                  className={
                    pathName === '/compose/tweet/unsent/drafts'
                      ? 'border-b-4 border-tweeter-blue py-4'
                      : 'text-gray-500 py-4'
                  }
                >
                  Unsent Tweets
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-1 dark:hover:bg-white/10 hover:bg-black/10 cursor-pointer">
            <Link
              href="/compose/tweet/unsent/scheduled"
              className="font-semibold w-full"
            >
              <div className="flex justify-center">
                <div
                  className={
                    pathName === '/compose/tweet/unsent/scheduled'
                      ? 'border-b-4 border-tweeter-blue py-4'
                      : 'text-gray-500 py-4'
                  }
                >
                  Scheduled
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex p-4 border-t dark:border-white/20 border-black/20">
          {children}
        </div>
      </Modal>
    </>
  )
}
