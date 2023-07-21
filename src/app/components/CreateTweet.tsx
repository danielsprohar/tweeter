import React from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FaSmile, FaUser } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

const BUTTONS = [
  {
    title: "Add media",
    icon: GoFileMedia,
  },
  {
    title: "Add a GIF",
    icon: AiOutlineGif,
  },
  {
    title: "Create a poll",
    icon: BiPoll,
  },
  {
    title: "Add an emoji",
    icon: FaSmile,
  },
  {
    title: "Schedule a tweet",
    icon: TbCalendarTime,
  },
  {
    title: "Tag Location",
    icon: MdLocationPin,
  },
];

export default function CreateTweet() {
  return (
    <div className="relative border-t border-b border-black/10 dark:border-white/10 p-2">
      <div className="flex gap-x-4">
        <div>
          <FaUser />
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
          {/* Button bar */}
          <div className="flex items-center justify-between w-full py-2 border-t dark:border-white/10 border-black/10">
            <div className="flex gap-x-2">
              {BUTTONS.map((btn) => (
                <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-blue-700 hover:bg-blue-400/20">
                  <div title={btn.title} aria-label={btn.title}>
                    <btn.icon />
                  </div>
                </button>
              ))}
            </div>
            <div>
              <button className="rounded-full bg-blue-500 px-4 py-2">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
