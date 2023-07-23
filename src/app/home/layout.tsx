import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home | Tweeter',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
