import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function AccountMenu() {
  return (
    <div
      aria-label="Account menu"
      role="button"
      className="flex items-center p-2 rounded-full w-full dark:hover:bg-white/10 hover:bg-black/10 transition duration-200"
    >
      <div className="flex gap-x-2">
        {/* User avatar */}
        <div className="w-10 h-10 rounded-full bg-slate-300"></div>

        <div className="flex flex-col">
          <div className="font-bold">Name</div>
          <div className="font-gray-500">
            <span dangerouslySetInnerHTML={{ __html: '&#64;' }}></span>
            username
          </div>
        </div>
      </div>

      <button>
        <FiMoreHorizontal />
      </button>
    </div>
  )
}
