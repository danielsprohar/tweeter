import Link from 'next/link'

export default function MessagesPage() {
  return (
    <section className="w-full flex flex-col flex-1">
      <div
        data-testid="emptyState"
        className="h-screen flex flex-col items-center justify-center"
      >
        <div className="px-8 py-0 my-8 mx-auto">
          <h2 className="font-bold text-3xl">Select a message</h2>
          <p className="text-gray-500 mb-7">
            Choose from your existing conversations, start a new one, or just
            keep swimming.
          </p>
          <div className="flex">
            <Link
              className="text-white bg-tweeter-blue rounded-full px-8 py-4"
              href={'/messages/compose'}
            >
              <div>
                <span className="font-bold">New message</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
