import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import EmojiPicker from './components/emoji-picker/EmojiPicker'

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <header className="border-b border-inherit">
        <nav className="flex items-center p-2">
          <div className="py-2 px-4 text-3xl">
            <FaTwitter />
          </div>
          <ul className="flex items-center gap-x-2 list-none ms-auto">
            <li>
              <Link
                className="px-4 py-2 border rounded hover:bg-black/10 dark:hover:bg-white/10"
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
          </ul>
        </nav>
      </header>
      <main className="p-2">
        <h1 className="text-xl text-tweeter-blue">
          <span dangerouslySetInnerHTML={{ __html: '&#35;' }}></span>
          Right in the Tweeter
        </h1>
        <p>Come check it out.</p>

        <div>
          <EmojiPicker />
        </div>
      </main>
    </div>
  )
}
