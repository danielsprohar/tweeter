'use client'

import { usePathname, useRouter } from 'next/navigation'
import { MdCalendarMonth, MdOutlineKeyboardBackspace } from 'react-icons/md'
import { NavTab, NavTabProps } from '../components/tabs/NavTab'
import NavTabs from '../components/tabs/NavTabs'

export default function ProfilePage() {
  const pathName = usePathname()
  const router = useRouter()
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const NAV_TABS: NavTabProps[] = [
    {
      displayText: 'Tweets',
      href: '/profile',
      isActive: pathName === '/profile',
    },
    {
      displayText: 'Replies',
      href: '/profile/replies',
      isActive: pathName === '/profile/replies',
    },
    {
      displayText: 'Highlights',
      href: '/profile/highlights',
      isActive: pathName === '/profile/highlights',
    },
    {
      displayText: 'Media',
      href: '/profile/media',
      isActive: pathName === '/profile/media',
    },
    {
      displayText: 'Likes',
      href: '/profile/likes',
      isActive: pathName === '/profile/likes',
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex items-center px-3 py-2">
        <button
          onClick={() => router.push('/messages')}
          title="Close"
          aria-label="Close dialog"
          className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10 text-xl mr-4"
        >
          <MdOutlineKeyboardBackspace />
        </button>
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">John Doe</h2>
          <p className="text-gray-500">0 tweets</p>
        </div>
      </div>

      {/* Avatar and background image */}
      <div className="relative flex flex-col">
        <div className="bg-slate-500 dark:bg-gray-700 aspect-square max-h-[200px]"></div>
        <div className="px-4 py-3 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-black p-1 -mt-[69px]">
              <div className="rounded-full bg-indigo-500 h-32 w-32"></div>
            </div>
            <button className="rounded-full font-semibold px-4 py-1 border border-black/80 dark:border-white/80 hover:bg-black/10 dark:hover:bg-white/10">
              Edit profile
            </button>
          </div>
        </div>
      </div>

      {/* User name & username (handle)*/}
      <div className="flex flex-col px-4 py-3 gap-y-2">
        <div className="flex flex-col">
          <p className="font-bold text-xl">John Doe</p>
          <p className="text-gray-500">@johndoe</p>
        </div>
        <div className="flex items-center gap-x-2 text-gray-500">
          <MdCalendarMonth />
          <p>Joined {dateFormatter.format(new Date())}</p>
        </div>
        <div className="flex items-center gap-x-4 text-gray-500">
          <p>
            <span className="font-bold text-black dark:text-white">0</span>
            {` Following`}
          </p>
          <p>
            <span className="font-bold text-black dark:text-white">0</span>
            {` Followers`}
          </p>
        </div>
      </div>

      <NavTabs>
        {NAV_TABS.map((tab) => (
          <NavTab
            isActive={tab.isActive}
            href={tab.href}
            displayText={tab.displayText}
            key={tab.href}
          />
        ))}
      </NavTabs>
    </div>
  )
}
