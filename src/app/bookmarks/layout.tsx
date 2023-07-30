import { Metadata } from 'next'
import LeftSidebar from '../components/left-sidebar/LeftSidebar'
import RightSidebar from '../components/right-sidebar/RightSidebar'
import SearchTwitter from '../components/SearchTwitter'
import WhatIsHappening from '../../components/WhatIsHappening'
import SuggestedProphets from '../components/right-sidebar/SuggestedProphets'
import { Children } from '../types/children'
import MainContent from '../MainContent'

export const metadata: Metadata = {
  title: 'Bookmarks | Tweeter',
}

export default function BookmarksLayout({ children }: Children) {
  return (
    <>
      <LeftSidebar />
      <MainContent>{children}</MainContent>
      <RightSidebar>
        <SearchTwitter />
        <WhatIsHappening />
        <SuggestedProphets />
      </RightSidebar>
    </>
  )
}
