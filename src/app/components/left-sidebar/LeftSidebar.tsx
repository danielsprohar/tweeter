import Link from 'next/link'
import {
  FaBell,
  FaBookmark,
  FaEnvelope,
  FaHashtag,
  FaHome,
  FaTwitter,
  FaUser,
} from 'react-icons/fa'

import { CgMoreO } from 'react-icons/cg'
import AccountMenu from './AccountMenu'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    icon: FaHome,
  },
  {
    title: 'Explore',
    icon: FaHashtag,
  },
  {
    title: 'Notifications',
    icon: FaBell,
  },
  {
    title: 'Messages',
    icon: FaEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: FaBookmark,
  },
  {
    title: 'Profile',
    icon: FaUser,
  },
  {
    title: 'More',
    icon: CgMoreO,
  },
]

export default function LeftSidebar() {
  return (
    <section className="w-72 h-screen flex flex-col border-r border-black/10 dark:border-white/10">
      <div className="flex flex-col gap-y-4 items-stretch h-screen">
        <div className="py-2 px-4 text-3xl">
          <FaTwitter />
        </div>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={item.title.toLowerCase()}
            className="dark:hover:bg-white/10  hover:bg-black/10 transition duration-200 px-4 py-2 rounded-full"
          >
            <div className="flex items-center gap-x-4">
              <item.icon /> <span>{item.title}</span>
            </div>
          </Link>
        ))}
        <button className="w-100 rounded-full mx-4 py-4 text-center bg-tweeter-blue text-white hover:bg-opacity-80 font-semibold">
          Tweet
        </button>
      </div>
      <AccountMenu />
    </section>
  )
}