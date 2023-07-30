import WhatIsHappening from '../../components/WhatIsHappening'
import Main from './Main'
import SearchTwitter from './SearchTwitter'
import LeftSidebar from './left-sidebar/LeftSidebar'
import RightSidebar from './right-sidebar/RightSidebar'
import SuggestedProphets from './right-sidebar/SuggestedProphets'

export default function Home() {
  return (
    <div className="relative flex">
      <LeftSidebar />
      <Main />
      <RightSidebar>
        <SearchTwitter />
        <WhatIsHappening />
        <SuggestedProphets />
      </RightSidebar>
    </div>
  )
}
