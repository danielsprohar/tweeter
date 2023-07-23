'use client'

import { useRouter } from 'next/navigation'
import { AiOutlineClose } from 'react-icons/ai'
import GiphyGrid from '../../../components/GiphyGrid'

export default function GifSearchPage() {
  const router = useRouter()

  return (
    <div className="fixed flex flex-col items-center w-full h-full left-0 top-0 backdrop-contrast-50 z-10">
      <div className="flex justify-center h-screen w-full">
        <div role="dialog" className="md:mt-12 md:w-[650px] md:h-[600px] overflow-hidden rounded-xl">
          <div className="w-full h-full rounded-xl overflow-y-scroll dark:bg-black dark:text-white bg-white text-black">
            <section className="flex items-center gap-x-4 my-2 px-2">
              <button
                className="hover:bg-white/10 p-2 rounded-full"
                onClick={() => router.push('/home')}
              >
                <AiOutlineClose />
              </button>
              <div className="flex-grow">
                <input
                  type="text"
                  name="gifQuery"
                  id="gifQuery"
                  className="w-full bg-inherit outline-none rounded-full py-2 px-4 border focus:border-tweeter-blue"
                  placeholder="Search for GIFs"
                />
              </div>
            </section>
            <GiphyGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
