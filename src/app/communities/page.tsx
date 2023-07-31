'use client'

import communities from '@/../json/communities.json'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import {
  MdGroupAdd,
  MdMoreHoriz,
  MdOutlineKeyboardBackspace,
} from 'react-icons/md'
import { PiSmileyAngryBold } from 'react-icons/pi'
import CommunityDetailsListItem from '../../components/CommunityDetailsListItem'
import Menu from '../components/menu/Menu'
import MenuBody from '../components/menu/MenuBody'
import MenuItem from '../components/menu/MenuItem'
import { MenuTriggerButton } from '../components/menu/MenuTriggerButton'
import { Community } from '../models/community.model'

export default function CommunitiesPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col">
      <section className="flex items-center px-3 py-2">
        <div className="flex">
          <button
            onClick={() => router.back()}
            title="Close"
            aria-label="Close dialog"
            className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10 text-xl mr-4"
          >
            <MdOutlineKeyboardBackspace />
          </button>
        </div>

        <h2 className="font-bold text-2xl">Discover new communities</h2>
        <div className="flex items-center gap-x-2 ms-auto">
          <Link
            className="rounded-full text-xl p-2 hover:bg-black/10 dark:hover:bg-white/10"
            href="/i/communities/suggested"
            aria-label="Search communities"
            title="Search"
          >
            <AiOutlineSearch />
          </Link>
          <Link
            className="rounded-full text-xl p-2 hover:bg-black/10 dark:hover:bg-white/10"
            href="/i/verified-get-verified"
            aria-label="Create a new community"
            title="Create community"
          >
            <MdGroupAdd />
          </Link>
        </div>
      </section>

      <section className="flex flex-col p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Discover new communities</h2>
          <Menu>
            <MenuTriggerButton
              ariaLabel="More"
              title="More"
            >
              <MdMoreHoriz />
            </MenuTriggerButton>
            <MenuBody>
              <MenuItem>
                <button className="flex items-center gap-x-2">
                  <PiSmileyAngryBold />
                  See less often
                </button>
              </MenuItem>
            </MenuBody>
          </Menu>
        </div>

        <div className="flex">
          <ul className="list-none p-0 m-0">
            {communities.map((community: Community) => (
              <li key={community.name}>
                <CommunityDetailsListItem
                  name={community.name}
                  memberCount={community.memberCount}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
