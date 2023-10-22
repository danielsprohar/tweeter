'use client'

import Link from 'next/link'
import { FiSettings } from 'react-icons/fi'
import SearchTwitter from '../components/SearchTwitter'
import LeftSidebar from '../components/left-sidebar/LeftSidebar'
import NavTabs from '../components/tabs/NavTabs'
import { Children } from '../types/children'

import { usePathname } from 'next/navigation'
import RightSidebar from '../components/right-sidebar/RightSidebar'
import SuggestedProphets from '../components/right-sidebar/SuggestedProphets'
import { NavTab, NavTabProps } from '../components/tabs/NavTab'
import MainContent from '../components/MainContent'

export default function ExplorePageLayout({ children }: Children) {
  const pathName = usePathname()
  const NAV_TABS: NavTabProps[] = [
    {
      displayText: 'For you',
      href: '/explore/tabs/for-you',
      isActive: pathName === '/explore' || pathName === '/explore/tabs/for-you',
    },
    {
      displayText: 'Trending',
      href: '/explore/tabs/trending',
      isActive: pathName === '/explore/tabs/trending',
    },
    {
      displayText: 'News',
      href: '/explore/tabs/news',
      isActive: pathName === '/explore/tabs/news',
    },
    {
      displayText: 'Sports',
      href: '/explore/tabs/sports',
      isActive: pathName === '/explore/tabs/sports',
    },
    {
      displayText: 'Entertainment',
      href: '/explore/tabs/entertainment',
      isActive: pathName === '/explore/tabs/entertainment',
    },
  ]

  return (
    <>
      <LeftSidebar />
      <MainContent>
        <div className="flex items-center justify-between">
          <div className="px-4 py-2 flex-1">
            <SearchTwitter />
          </div>
          <Link
            href={'/settings/explore'}
            title="Settings"
            aria-label="Settings"
            className="rounded-full p-2 text-xl hover:bg-black/10 dark:hover:bg-white/10"
          >
            <FiSettings />
          </Link>
        </div>
        <div className="py-2">
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
        {children}
      </MainContent>
      <RightSidebar>
        <SuggestedProphets />
      </RightSidebar>
    </>
  )
}
