import { TrendingTopic, TrendingTopicProps } from '../components/TrendingTopic'

const TREND_DATA: TrendingTopicProps[] = [
  { categoryName: 'Sports', name: 'Michael Jordan', tweetCount: 10_000 },
  { categoryName: 'Sports', name: 'Messi', tweetCount: 1_000_000_000 },
  { categoryName: 'News', name: 'Florida Man ...', tweetCount: 1_950_000 },
  { categoryName: 'Technology', name: 'Google', tweetCount: 1_000 },
  { categoryName: 'Music', name: 'Kanye', tweetCount: 1_100 },
  { categoryName: 'Politics', name: 'Sex scandal', tweetCount: 9_000 },
  { categoryName: 'Politics', name: 'Secret Service', tweetCount: 138_000 },
  { categoryName: 'Technology', name: 'ElonX', tweetCount: 3_958 },
]

export default function ExplorePage() {
  return (
    <div className="flex flex-col">
      {TREND_DATA.map((trend, i) => (
        <TrendingTopic
          categoryName={trend.categoryName}
          name={trend.name}
          tweetCount={trend.tweetCount}
          key={i}
        />
      ))}
    </div>
  )
}
