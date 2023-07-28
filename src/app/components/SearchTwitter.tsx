'use client'

import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function SearchTwitter() {
  const defaultWrapperClass =
    'relative rounded-full flex items-center gap-x-4 dark:bg-white/10 bg-gray-100 p-2 border border-transparent'
  const focusedWrapperClass =
    'relative rounded-full flex items-center gap-x-4 dark:bg-white/10 p-2 border border-tweeter-blue'

  const defaultIconClass = 'text-gray-400'
  const focusedIconClass = defaultIconClass + ' text-tweeter-blue'

  const [wrapperClass, setWrapperClass] = useState<string>(defaultWrapperClass)
  const [iconClass, setIconClass] = useState<string>(defaultIconClass)

  function handleFocus(): void {
    setWrapperClass(focusedWrapperClass)
    setIconClass(focusedIconClass)
  }

  function handleBlur(): void {
    setWrapperClass(defaultWrapperClass)
    setIconClass(defaultIconClass)
  }

  return (
    <div className={wrapperClass}>
      <BsSearch className={iconClass} />
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="outline-none border-none bg-transparent"
        type="text"
        name="query"
        id="query"
        placeholder="Search Tweeter"
      />
    </div>
  )
}
