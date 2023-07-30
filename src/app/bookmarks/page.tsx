export default function BookmarksPage() {
  return (
    <div className="flex flex-col">
      <div className="px-3 py-2">
        <h2 className="font-bold text-2xl">Bookmarks</h2>
        <p className="text-sm text-gray-500">{`@username`}</p>
      </div>
      <div className="flex flex-col">
        <div className="p-8 flex flex-col items-center justify-center">
          <h3 className="font-bold text-3xl">Save Tweets for later</h3>
          <p className="text-gray-500">
            Don’t let the good ones fly away! Bookmark Tweets to easily find
            them again in the future.
          </p>
        </div>
      </div>
    </div>
  )
}
