import Home from '../../../components/Home'
import Modal from '../../../components/Modal'
import ScheduledTweet from '../../../components/scheduled-tweet/ScheduledTweet'

export default function ScheduleTweetPage() {
  return (
    <>
      <Home />
      <Modal>
        <div role="dialog" className="mt-12">
          <ScheduledTweet />
        </div>
      </Modal>
    </>
  )
}
