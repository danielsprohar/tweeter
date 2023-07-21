import { AiOutlineRetweet } from "react-icons/ai";
import { BsChat, BsUpload } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdStats } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";

type Props = {
  index: number;
};

export default function Tweet(props: Props) {
  return (
    <div
      className="w-full pt-4 flex border-b border-black/10 dark:border-white/10"
      key={props.index}
    >
      {/* avatar */}
      <div className="pr-2">
        <div className="h-10 w-10 bg-slate-500 rounded"></div>
      </div>

      {/* info */}
      <div className="flex flex-col w-full">
        {/* user info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="font-bold">Username</div>
            <div className="text-gray-500">@user_handle</div>
            <div dangerouslySetInnerHTML={{ __html: "&centerdot;" }}></div>
            <div
              className="text-gray-500"
              dangerouslySetInnerHTML={{
                __html: new Date().toLocaleDateString(),
              }}
            ></div>
          </div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div>
        {/* tweet body */}
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            tempore veritatis earum odio! Ut quibusdam porro ipsa cupiditate
            quaerat odit accusantium architecto sapiente illo similique,
            perferendis assumenda vero? Sapiente, voluptas?
          </p>
          {/* image or web preview */}
          <div className="bg-slate-500 aspect-square w-full h-96 rounded-xl mt-2"></div>
        </div>

        {/* toolbar */}
        <div className="flex items-center justify-between py-3 max-w-md">
          {/* replay */}
          <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 hover:bg-blue-400/20 hover:text-tweeter-blue">
            <div
              title="Reply"
              aria-label="Reply"
              data-testid="reply"
              className="flex items-center gap-x-2"
            >
              <BsChat />
              <span>3</span>
            </div>
          </button>

          {/* retweet */}
          <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-green-900/50 dark:hover:text-green-400 hover:text-green-700 hover:bg-green-400/20">
            <div
              title="Retweet"
              aria-label="Retweet"
              data-testid="retweet"
              className="flex items-center gap-x-2"
            >
              <AiOutlineRetweet />
              <span>30</span>
            </div>
          </button>

          {/* fav */}
          <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-pink-900/50 dark:hover:text-pink-400 hover:text-pink-700 hover:bg-pink-400/20">
            <div
              title="Like"
              aria-label="Like"
              data-testid="likes"
              className="flex items-center gap-x-2"
            >
              <MdOutlineFavorite />
              <span>300</span>
            </div>
          </button>

          {/* views */}
          <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 hover:bg-blue-400/20 hover:text-tweeter-blue">
            <div
              className="flex items-center gap-x-2"
              title="View"
              aria-label="Views"
              data-testid="views"
            >
              <IoMdStats />
              <span>3000</span>
            </div>
          </button>

          {/* share */}
          <button className="flex gap-x-2 rounded-full w-fit p-2 dark:hover:bg-blue-900/50 hover:bg-blue-400/20 hover:text-tweeter-blue">
            <div title="Share" aria-label="Share" data-testid="upload">
              <BsUpload />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
