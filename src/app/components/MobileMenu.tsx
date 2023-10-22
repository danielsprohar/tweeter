'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  MdGroup,
  MdHomeFilled,
  MdMailOutline,
  MdNotificationsNone,
  MdSearch,
} from 'react-icons/md'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    path: '/home',
    icon: MdHomeFilled,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: MdSearch,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: MdNotificationsNone,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: MdMailOutline,
  },
  {
    title: 'Communities',
    path: '/communities',
    icon: MdGroup,
  },
]

export default function MobileMenu() {}
