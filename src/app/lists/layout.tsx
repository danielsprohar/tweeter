import { Metadata } from 'next'
import WhatIsHappening from '../../components/WhatIsHappening'
import SearchTwitter from '../components/SearchTwitter'
import LeftSidebar from '../components/left-sidebar/LeftSidebar'
import RightSidebar from '../components/right-sidebar/RightSidebar'
import SuggestedProphets from '../components/right-sidebar/SuggestedProphets'
import { Children } from '../types/children'

export const metadata: Metadata = {
  title: 'Lists | Tweeter',
}

export default function ListsPageLayout({ children }: Children) {
  return (
    <>
      <LeftSidebar />
      <section className="ml-72 flex flex-grow">{children}</section>
      <RightSidebar>
        <SearchTwitter />
        <WhatIsHappening />
        <SuggestedProphets />
      </RightSidebar>
    </>
  )
}
