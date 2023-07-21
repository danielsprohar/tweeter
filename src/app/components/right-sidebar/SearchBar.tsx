"use client";

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const defaultWrapperClass =
    "relative rounded-full flex items-center gap-x-4 dark:bg-white/10 bg-gray-100 p-2 border border-transparent";
  const focusedWrapperClass =
    "relative rounded-full flex items-center gap-x-4 dark:bg-white/10 p-2 border border-tweeter-blue";

  const defaultIconClass = "text-gray-400";
  const focusedIconClass = defaultIconClass + " text-tweeter-blue";

  const [wrapperClass, setWrapperClass] = useState(defaultWrapperClass);
  const [iconClass, setIconClass] = useState(defaultIconClass);

  function handleFocus() {
    setWrapperClass(focusedWrapperClass);
    setIconClass(focusedIconClass);
  }

  function handleBlur() {
    setWrapperClass(defaultWrapperClass);
    setIconClass(defaultIconClass);
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
  );
}
