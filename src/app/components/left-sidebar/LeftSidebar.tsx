'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiHomeCircle, BiSolidHomeCircle } from 'react-icons/bi'
import {
  BsBell,
  BsBellFill,
  BsBookmark,
  BsBookmarkFill,
  BsSearch,
} from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import {
  FaEnvelope,
  FaRegEnvelope,
  FaRegUser,
  FaTwitter,
  FaUser,
} from 'react-icons/fa'
import { MdOutlineCreate, MdOutlineVerified, MdVerified } from 'react-icons/md'
import { PiUsers, PiUsersFill } from 'react-icons/pi'
import { RiFileListFill, RiFileListLine } from 'react-icons/ri'
import AccountMenu from './AccountMenu'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    path: '/home',
    icon: BiHomeCircle,
    iconSolid: BiSolidHomeCircle,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: BsSearch,
    iconSolid: BsSearch,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: BsBell,
    iconSolid: BsBellFill,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: FaRegEnvelope,
    iconSolid: FaEnvelope,
  },
  {
    title: 'Lists',
    path: '/lists',
    icon: RiFileListLine,
    iconSolid: RiFileListFill,
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
    icon: BsBookmark,
    iconSolid: BsBookmarkFill,
  },
  {
    title: 'Communities',
    path: '/communities',
    icon: PiUsers,
    iconSolid: PiUsersFill,
  },
  {
    title: 'Verified',
    path: '/i/verified-choose',
    icon: MdOutlineVerified,
    iconSolid: MdVerified,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: FaRegUser,
    iconSolid: FaUser,
  },
  {
    title: 'More',
    path: '/more',
    icon: CgMoreO,
    iconSolid: CgMoreO,
  },
]

export default function LeftSidebar() {
  const path = usePathname()
  const linkClass =
    'dark:hover:bg-white/10 hover:bg-black/10 transition duration-200 px-4 py-2 rounded-full text-lg'

  return (
    <section className="hidden sm:flex fixed w-20 lg:w-72 h-screen flex-col border-r border-black/10 dark:border-white/10">
      <div className="flex flex-col gap-y-4 items-center h-screen overflow-y-auto text-[20px] lg:items-stretch">
        <div className="py-2 px-4 text-tweeter-blue text-3xl">
          <FaTwitter />
        </div>

        {NAVIGATION_ITEMS.map((item) => {
          const isActive = path.startsWith(item.path)

          return (
            <Link
              key={item.title}
              href={item.path}
              title={item.title}
              aria-label={item.title}
              className={isActive ? `${linkClass} font-bold` : linkClass}
            >
              <div className="flex items-center gap-x-4">
                {isActive ? (
                  <>
                    <item.iconSolid />
                    <span className="font-bold hidden lg:block">
                      {item.title}
                    </span>
                  </>
                ) : (
                  <>
                    <item.icon />{' '}
                    <span className="hidden lg:block">{item.title}</span>
                  </>
                )}
              </div>
            </Link>
          )
        })}

        <div className="flex">
          <button className="hidden w-full rounded-full mx-4 py-4 text-center bg-tweeter-blue text-white hover:bg-opacity-80 font-semibold lg:block">
            Tweet
          </button>
          <button
            title="Compose tweet"
            aria-label="Compose tweet"
            className="p-2 rounded-full bg-tweeter-blue text-white lg:hidden"
          >
            <MdOutlineCreate />
          </button>
        </div>
      </div>
      <AccountMenu />
    </section>
  )
}
