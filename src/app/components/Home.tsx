import Main from './Main'
import LeftSidebar from './left-sidebar/LeftSidebar'
import RightSidebar from './right-sidebar/RightSidebar'

export default function Home() {
  return (
    <div className="relative flex">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  )
}
