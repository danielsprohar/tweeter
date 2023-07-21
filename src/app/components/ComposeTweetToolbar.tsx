"use client";

import React from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FaSmile } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

export default function ComposeTweetToolbar() {
  function uploadMedia() {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/png, image/jpeg";
    input.onchange = (_) => {
      console.log(input.files);
      const file = input.files?.item(0);
      if (file) {
        console.log("file.name", file.name);
        console.log("file.size", file.size);
      }
    };

    input.click();
  }

  return (
    <div className="flex items-center justify-between w-full py-2 border-t dark:border-white/10 border-black/10">
      <div className="flex gap-x-2">
        <button
          onClick={uploadMedia}
          className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20"
        >
          <div title="Media" aria-label="Add media">
            <GoFileMedia />
          </div>
        </button>
        <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20">
          <div title="GIF" aria-label="Add a GIF">
            <AiOutlineGif />
          </div>
        </button>
        <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20">
          <div title="Poll" aria-label="Create a poll">
            <BiPoll />
          </div>
        </button>
        <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20">
          <div title="Emoji" aria-label="Add an emoji">
            <FaSmile />
          </div>
        </button>
        <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20">
          <div title="Schedule" aria-label="Schedule a tweet">
            <TbCalendarTime />
          </div>
        </button>
        <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 dark:text-blue-400 text-tweeter-blue hover:bg-blue-400/20">
          <div title="Location" aria-label="Tag location">
            <MdLocationPin />
          </div>
        </button>
      </div>
      <div>
        <button className="rounded-full bg-tweeter-blue text-white px-4 py-2 font-semibold">
          Tweet
        </button>
      </div>
    </div>
  );
}
