'use client'

import { FiMoreHorizontal } from 'react-icons/fi'
import { PiSmileyAngryBold, PiSmileyMehBold } from 'react-icons/pi'
import Menu from './menu/Menu'
import { MenuTriggerButton } from './menu/MenuTriggerButton'
import MenuBody from './menu/MenuBody'
import MenuItem from './menu/MenuItem'

export default function Trend() {
  return (
    <div className="relative cursor-pointer py-3 px-4">
      {/* Menu */}
      <div className="absolute top-1 right-1">
        <Menu>
          <MenuTriggerButton ariaLabel="More" title="More">
            <FiMoreHorizontal />
          </MenuTriggerButton>
          <MenuBody>
            <MenuItem>
              <button className="flex gap-x-2">
                <PiSmileyMehBold className="text-2xl" />
                <div>
                  <span>Not interested in this</span>
                </div>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="flex gap-x-2">
                <PiSmileyAngryBold className="text-2xl" />
                <div>
                  <span>This trend is harmful or spammy</span>
                </div>
              </button>
            </MenuItem>
          </MenuBody>
        </Menu>
      </div>

      {/* Trend details */}
      <div className="flex flex-col">
        <div className="text-gray-500 text-sm">
          <span
            dangerouslySetInnerHTML={{
              __html: `categoryName &centerdot; Trending`,
            }}
          ></span>
        </div>
        <div className="font-semibold">
          <span>trendName</span>
        </div>
        <div className="text-gray-500 text-sm">
          <span>1000 Tweets</span>
        </div>
      </div>
    </div>
  )
}
