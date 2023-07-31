import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { Community } from '../app/models/community.model'
import abbreviateNumber from '../pipes/abbreviate-number.pipe'

export default function CommunityDetailsListItem(community: Community) {
  return (
    <Link
      href="/i/communities/id"
      className="px-4 py-3"
    >
      <div className="flex gap-x-3">
        <div className="w-24 h-24 rounded-xl bg-slate-300 dark:bg-slate-500"></div>
        <div className="flex flex-col">
          <p className="font-bold">{community.name}</p>
          <p>
            <span className="font-bold">
              {abbreviateNumber(community.memberCount)}
            </span>{' '}
            <span className="text-gray-500">Members</span>
          </p>
          <div className="flex items-center mt-auto">
            <div className="z-50 h-9 w-9 rounded-full bg-white dark:bg-black overflow-hidden p-[0.5px]">
              <div className="rounded-full w-full h-full bg-slate-300">
                <FaUser className="w-full h-full text-gray-500 dark:text-gray-500" />
              </div>
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`z-${
                  5 - (i + 1)
                }0 h-9 w-9 rounded-full bg-white dark:bg-black overflow-hidden p-[0.5px] -ml-4`}
              >
                <div className="rounded-full w-full h-full bg-slate-300">
                  <FaUser className="w-full h-full text-gray-500 dark:text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
