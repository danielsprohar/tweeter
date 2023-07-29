'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiSettings } from 'react-icons/fi'
import LeftSidebar from '../components/left-sidebar/LeftSidebar'
import RightSidebar from '../components/right-sidebar/RightSidebar'
import { NavTab, NavTabProps } from '../components/tabs/NavTab'
import NavTabs from '../components/tabs/NavTabs'
import { Children } from '../types/children'

export default function NotificationsLayout({ children }: Children) {
  const pathName = usePathname()
  const NAV_TABS: NavTabProps[] = [
    {
      displayText: 'All',
      href: '/notifications',
      isActive: pathName === '/notifications',
    },
    {
      displayText: 'Verified',
      href: '/notifications/verified',
      isActive: pathName === '/notifications/verified',
    },
    {
      displayText: 'Mentions',
      href: '/notifications/mentions',
      isActive: pathName === '/notifications/mentions',
    },
  ]
  return (
    <>
      <LeftSidebar />

      <main className="ml-72 flex-grow">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="font-bold text-2xl">Notifications</h1>

          <Link
            href={'/settings/notifications'}
            title="Settings"
            aria-label="Settings"
            className="rounded-full p-2 text-xl hover:bg-black/10 dark:hover:bg-white/10"
          >
            <FiSettings />
          </Link>
        </div>
        <div>
          <NavTabs>
            {NAV_TABS.map((tab: NavTabProps, i: number) => (
              <NavTab
                href={tab.href}
                displayText={tab.displayText}
                isActive={tab.isActive}
                key={i}
              />
            ))}
          </NavTabs>
        </div>
        <div>{children}</div>
      </main>

      <RightSidebar />
    </>
  )
}
