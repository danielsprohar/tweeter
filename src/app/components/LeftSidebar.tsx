import Link from "next/link";
import React from "react";
import {
  FaBell,
  FaBookmark,
  FaEnvelope,
  FaHashtag,
  FaHome,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

import { CgMoreO } from "react-icons/cg";

const NAVIGATION_ITEMS = [
  {
    title: "Home",
    icon: FaHome,
  },
  {
    title: "Explore",
    icon: FaHashtag,
  },
  {
    title: "Notifications",
    icon: FaBell,
  },
  {
    title: "Messages",
    icon: FaEnvelope,
  },
  {
    title: "Bookmarks",
    icon: FaBookmark,
  },
  {
    title: "Profile",
    icon: FaUser,
  },
  {
    title: "More",
    icon: CgMoreO,
  },
];

export default function LeftSidebar() {
  return (
    <section className="w-72 h-screen ">
      <div className="flex flex-col gap-y-4">
        <div>
          <FaTwitter />
        </div>
        {NAVIGATION_ITEMS.map((item) => (
          <Link key={item.title} href={item.title.toLowerCase()}>
            <div className="flex items-center gap-x-4">
              <item.icon /> <span>{item.title}</span>
            </div>
          </Link>
        ))}
        <div className="w-100">
          <button className="w-100 rounded-2xl py-4 text-center bg-blue-500">
            Tweet
          </button>
        </div>
      </div>
    </section>
  );
}
