export default function NoScheduledTweets() {
  return (
    <div className="flex flex-col gap-y-2 justify-center">
      <h3 className="text-2xl font-bold">Hold That Thought!</h3>
      <div className="flex">
        <p className="text-gray-500">
          Not ready to send a Tweet just yet? Save it to your drafts or schedule
          it for later.
        </p>
      </div>
    </div>
  )
}
