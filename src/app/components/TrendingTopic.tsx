'use client'

import { FiMoreHorizontal } from 'react-icons/fi'
import { PiSmileyAngryBold, PiSmileyMehBold } from 'react-icons/pi'
import abbreviateNumber from '../../pipes/abbreviate-number.pipe'
import Menu from './menu/Menu'
import MenuBody from './menu/MenuBody'
import MenuItem from './menu/MenuItem'
import { MenuTriggerButton } from './menu/MenuTriggerButton'

export interface TrendingTopicProps {
  categoryName: string
  name: string
  tweetCount: number
}

export function TrendingTopic({
  categoryName,
  name,
  tweetCount,
}: TrendingTopicProps) {
  return (
    <div className="w-full relative cursor-pointer py-3 px-4">
      {/* Menu */}
      <div className="absolute top-1 right-1">
        <Menu>
          <MenuTriggerButton
            ariaLabel="More"
            title="More"
          >
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
        <div
          className="text-gray-500 text-sm"
          data-testid="trendCategory"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: `${categoryName} &centerdot; Trending`,
            }}
          ></span>
        </div>
        <div
          className="font-semibold"
          data-testid="trendName"
        >
          <span>{name}</span>
        </div>
        <div
          className="text-gray-500 text-sm"
          data-testid="trendTweetCount"
        >
          <span>{abbreviateNumber(tweetCount)} Tweets</span>
        </div>
      </div>
    </div>
  )
}
