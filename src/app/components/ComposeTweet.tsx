"use client"

import ComposeTweetToolbar from "./ComposeTweetToolbar";

export default function ComposeTweet() {
  return (
    <div className="relative border-t border-b border-black/10 dark:border-white/10 p-2">
      <div className="flex gap-x-4">
        <div className="relative rounded-full bg-indigo-500 w-10 h-10">
          <div className="absolute top-[7px] left-[13px] text-xl">D</div>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <div className="py-4">
            <input
              type="text"
              name="tweet"
              id="tweetInput"
              className="bg-inherit w-full border-none outline-none"
              placeholder="What is happening?"
              autoFocus
            />
          </div>
          <ComposeTweetToolbar />
        </div>
      </div>
    </div>
  );
}
