'use client'

import Link from 'next/link'

type Props = {
  href: string
  displayText: string
  isActive: boolean
  onClick?: (event: any) => void
}

export default function NavTab({
  href,
  displayText,
  isActive,
  onClick,
}: Props) {
  return (
    <div className="cursor-pointer w-full flex flex-1 justify-center font-semibold dark:hover:bg-white/10 hover:bg-black/10">
      <Link href={href} onClick={onClick} className="w-full">
        <div className="flex justify-center items-center">
          <div
            className={
              isActive
                ? 'border-b-4 border-tweeter-blue py-4'
                : 'text-gray-500 py-4'
            }
          >
            {displayText}
          </div>
        </div>
      </Link>
    </div>
  )
}
