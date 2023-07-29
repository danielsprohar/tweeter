import Link from 'next/link'
import LeftSidebar from '../components/left-sidebar/LeftSidebar'
import { FiSettings } from 'react-icons/fi'
import { Children } from '../types/children'
import { Metadata } from 'next'
import { TbMessagePlus } from 'react-icons/tb'

export const metadata: Metadata = {
  title: 'Messages | Tweeter',
}

export default function MessagesPageLayout({ children }: Children) {
  return (
    <>
      <LeftSidebar />
      <section className="ml-72 flex-1 w-full h-screen border-r border-black/10 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="font-bold text-2xl">Messages</h1>

          <div className="flex gap-x-2">
            <Link
              href={'/messages/settings'}
              title="Settings"
              aria-label="Settings"
              className="rounded-full p-2 text-xl hover:bg-black/10 dark:hover:bg-white/10"
            >
              <FiSettings />
            </Link>
            <Link
              href={'/messages/compose'}
              title="New message"
              aria-label="Compose a DM"
              className="rounded-full p-2 text-xl hover:bg-black/10 dark:hover:bg-white/10"
            >
              <TbMessagePlus />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 my-8 px-8">
          <h1 className="font-bold text-3xl">Welcome to your Inbox!</h1>
          <p className="mb-4 text-gray-500">
            Drop a line, share Tweets and more with private conversations
            between you and others on Twitter.
          </p>
          <div className="flex">
            <Link
              className="text-white bg-tweeter-blue rounded-full px-8 py-4"
              href={'/messsages/compose'}
            >
              <div>
                <span className="font-bold">Write a message</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {children}
    </>
  )
}
