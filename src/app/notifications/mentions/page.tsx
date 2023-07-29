export default function NotificationsMentionedPage() {
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
            When someone mentions you, you'll find it here.
          </p>
        </div>
      </div>
    </div>
  )
}
