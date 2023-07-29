export default function NotificationsVerifiedPage() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="p-4">
          <h1 className="text-3xl font-bold">
            Nothing to see here
            <span
              dangerouslySetInnerHTML={{ __html: '&nbsp;&mdash;&nbsp;' }}
            ></span>
            yet
          </h1>
          <p className="text-gray-500">
            Likes, mentions, Retweets, and a whole lot more
            <span
              dangerouslySetInnerHTML={{ __html: '&nbsp;&mdash;&nbsp;' }}
            ></span>
            when it comes from a verified account, you'll find it here.
            <span dangerouslySetInnerHTML={{ __html: '&nbsp' }}></span>
            <a
              target="_blank"
              className="underline text-black dark:text-white font-bold"
              href="https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
