import {
  TrendingTopic,
  TrendingTopicProps,
} from '../app/components/TrendingTopic'

const TRENDING_TOPICS: TrendingTopicProps[] = [
  { name: '#RIPTwitter', categoryName: 'Technology', tweetCount: 14_200 },
  { name: 'Niger', categoryName: 'Politics', tweetCount: 303_000 },
  { name: 'MyTwitter', categoryName: 'Technology', tweetCount: 1_410_500_000 },
  { name: 'Wtf is X', categoryName: 'Technology', tweetCount: 22_500 },
]

export default function WhatIsHappening() {
  return (
    <div className="rounded-xl flex flex-col bg-silver dark:bg-white/10">
      <div className="flex items-center px-4 py-3">
        <h2 className="font-bold text-xl">What's happening</h2>
      </div>
      <div className="flex flex-1">
        <ul className="w-full list-none p-0 m-0 flex flex-col gap-y-4">
          {TRENDING_TOPICS.map((topic) => (
            <li className="flex flex-1">
              <TrendingTopic
                key={topic.name}
                name={topic.name}
                categoryName={topic.categoryName}
                tweetCount={topic.tweetCount}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
