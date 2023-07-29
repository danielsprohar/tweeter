import { FaTwitter } from 'react-icons/fa'

export default function NotificationsPage() {
  const today = new Date()
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="flex flex-col">
      <article className="flex px-4 py-3 border-b border-black/10 dark:border-white/10">
        <div className="mr-3">
          <FaTwitter className="text-2xl" />
        </div>
        <div>
          <span>
            There was a login to your account @username from a new device on{' '}
            {dateFormatter.format(today)}. Review it now.
          </span>
        </div>
      </article>
    </div>
  )
}
