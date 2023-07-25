'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiSolidHomeCircle } from 'react-icons/bi'
import {
  FaBell,
  FaBookmark,
  FaEnvelope,
  FaHashtag,
  FaTwitter,
  FaUser,
} from 'react-icons/fa'

import { CgMoreO } from 'react-icons/cg'
import AccountMenu from './AccountMenu'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    path: '/home',
    icon: BiSolidHomeCircle,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: FaHashtag,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: FaBell,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: FaEnvelope,
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
    icon: FaBookmark,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: FaUser,
  },
  {
    title: 'More',
    path: '/more',
    icon: CgMoreO,
  },
]

export default function LeftSidebar() {
  const path = usePathname()
  const linkClass =
    'dark:hover:bg-white/10 hover:bg-black/10 transition duration-200 px-4 py-2 rounded-full text-lg'

  return (
    <section className="fixed w-72 h-screen flex flex-col border-r border-black/10 dark:border-white/10">
      <div className="flex flex-col gap-y-4 items-stretch h-screen">
        <div className="py-2 px-4 text-3xl">
          <FaTwitter />
        </div>
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = path.startsWith(item.path)

          return (
            <Link
              key={item.title}
              href={item.path}
              className={isActive ? `${linkClass} font-bold` : linkClass}
            >
              <div className="flex items-center gap-x-4">
                <item.icon /> <span>{item.title}</span>
              </div>
            </Link>
          )
        })}
        <button className="w-100 rounded-full mx-4 py-4 text-center bg-tweeter-blue text-white hover:bg-opacity-80 font-semibold">
          Tweet
        </button>
      </div>
      <AccountMenu />
    </section>
  )
}
