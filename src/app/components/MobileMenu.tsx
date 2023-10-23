'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  MdGroup,
  MdHome,
  MdHomeFilled,
  MdEmail,
  MdMailOutline,
  MdNotifications,
  MdOutlineNotificationsNone,
  MdSearch,
} from 'react-icons/md'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    path: '/home',
    icon: MdHome,
    iconSolid: MdHomeFilled,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: MdSearch,
    iconSolid: MdSearch,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: MdOutlineNotificationsNone,
    iconSolid: MdNotifications,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: MdMailOutline,
    iconSolid: MdEmail,
  },
  // {
  //   title: 'Communities',
  //   path: '/communities',
  //   icon: MdGroup,
  // },
]

export default function MobileMenu() {
  const path = usePathname()

  return (
    <nav className="fixed w-screen sm:hidden bottom-0 left-0 right-0 bg-white z-50 dark:bg-black dark:text-white">
      <div className="flex items-center h-14">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = path.startsWith(item.path)

          return (
            <div
              key={item.title}
              className="flex-1 w-full h-full flex items-center justify-center"
            >
              <Link
                href={item.path}
                className="flex items-center justify-center w-full h-full"
              >
                {isActive ? (
                  <>
                    <item.iconSolid />
                  </>
                ) : (
                  <>
                    <item.icon />
                  </>
                )}
              </Link>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
