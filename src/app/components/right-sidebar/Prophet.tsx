import React from 'react'

interface Prophet {
  username: string
  handle: string
}

export default function Prophet(prophet: Prophet) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-x-4">
        <div
          data-testid="avatar"
          className="w-10 h-10 bg-purple-500 rounded-full"
        ></div>
        <div className="flex flex-col">
          <div className="font-semibold">{prophet.username}</div>
          <div className="text-gray-500">
            <span
              dangerouslySetInnerHTML={{
                __html: '&#64',
              }}
            ></span>
            {prophet.handle}
          </div>
        </div>
      </div>
      <button className="rounded-full dark:bg-white dark:text-black bg-black text-white py-2 px-4 font-semibold">
        Follow
      </button>
    </div>
  )
}
