import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Children } from './types/children'
import MobileMenu from './components/MobileMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tweeter',
  description: 'Another Twitter clone',
  keywords: 'Twitter clone, Next.js, JavaScript, Supabase',
}

export default function RootLayout(props: Children) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="max-w-screen-xl w-full h-full flex relative">
            {props.children}
          </div>
        </div>
        <MobileMenu />
      </body>
    </html>
  )
}
