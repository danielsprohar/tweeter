import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <header className="border-b border-black/10 dark:border-white/10">
        <nav className="flex items-center p-2">
          <div className="py-2 px-4 text-3xl">
            <Link href={'/home'}>
              <div className="text-tweeter-blue">
                <FaTwitter />
              </div>
            </Link>
          </div>
          {/* <ul className="flex items-center gap-x-2 list-none ms-auto">
            <li>
              <Link
                className="px-4 py-2 border dark:border-white/10 border-black/10 rounded hover:bg-black/10 dark:hover:bg-white/10"
                href={`/login`}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                className="px-4 py-2 rounded bg-tweeter-blue text-white hover:bg-tweeter-blue/80"
                href={`/login`}
              >
                Sign up
              </Link>
            </li>
          </ul> */}
        </nav>
      </header>
      <main className="p-2">
        <h1 className="text-2xl text-tweeter-blue text-center mb-4">
          <span dangerouslySetInnerHTML={{ __html: '&#35;' }}></span>
          RightInTheTweeter
        </h1>

        <div className="flex flex-col items-center">
          <p>
            This is a Twitter clone built with Next.js 13. This is for
            demonstration purposes <em>only</em>.
          </p>
          <Link
            className="text-tweeter-blue hover:underline"
            href={'/home'}
          >
            See what's happening in the world right now
          </Link>
        </div>
      </main>
    </div>
  )
}
