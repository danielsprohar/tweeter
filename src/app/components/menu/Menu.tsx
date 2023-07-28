import { useState } from 'react'
import { Children } from '../../types/children'
import { MenuContext } from './MenuContext'

export default function Menu({ children }: Children) {
  const [hidden, setHidden] = useState<boolean>(true)
  
  return <MenuContext.Provider value={{hidden, setHidden}}>
    <div className="relative">{children}</div>
  </MenuContext.Provider>
}
