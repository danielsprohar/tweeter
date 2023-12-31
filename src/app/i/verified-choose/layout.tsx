import WhatIsHappening from '../../../components/WhatIsHappening'
import Home from '../../components/Home'
import MainContent from '../../components/MainContent'
import SearchTwitter from '../../components/SearchTwitter'
import LeftSidebar from '../../components/left-sidebar/LeftSidebar'
import RightSidebar from '../../components/right-sidebar/RightSidebar'
import SuggestedProphets from '../../components/right-sidebar/SuggestedProphets'
import { Children } from '../../types/children'

export default function VerifiedChooseLayout({ children }: Children) {
  return (
    <>
      <LeftSidebar />
      <MainContent>
        <Home />
        {children}
      </MainContent>
      <RightSidebar>
        <SearchTwitter />
        <WhatIsHappening />
        <SuggestedProphets />
      </RightSidebar>
    </>
  )
}
