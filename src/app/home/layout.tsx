import { Metadata } from 'next'
import { Children } from '../types/children'

export const metadata: Metadata = {
  title: 'Home | Tweeter',
}

export default function HomeLayout(props: Children) {
  return <div>{props.children}</div>
}
