'use client'

import users from '@/../json/users.json'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { debounce } from '../../../operators/debounce'
import Modal from '../../components/Modal'
import { User } from '../../models/user.model'

export default function ComposeMessagePage() {
  const router = useRouter()
  const [focused, setFocused] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [recipients, setRecipients] = useState<User[]>([])

  function search(query: string): void {
    if (query === '') {
      setSearchResults([])
    } else {
      const resultSet: User[] = users.filter(
        (user) => user.username.match(query) !== null
      )
      setSearchResults(resultSet)
    }
  }

  function addRecipient(user: User): void {
    setRecipients([...recipients, user])
    setSearchResults([])
  }

  function removeRecipient(user: User): void {
    setRecipients(
      recipients.filter((recipient: User) => recipient.id !== user.id)
    )
  }

  // TODO: Navigate back to the "/messages" route
  return (
    <Modal>
      <div className="flex items-center p-3">
        <button
          onClick={() => router.push('/messages')}
          title="Close"
          aria-label="Close dialog"
          className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10 text-xl mr-4"
        >
          <AiOutlineClose />
        </button>
        <h2 className="text-2xl font-bold">New message</h2>
        <button
          disabled={recipients.length === 0}
          className={
            recipients.length === 0
              ? 'opacity-50 ms-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black'
              : 'ms-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black'
          }
        >
          Next
        </button>
      </div>

      <div className="flex flex-col border-b border-black/20 dark:border-white/20">
        <div className="px-3 flex items-center">
          <label className="flex flex-grow items-center">
            <div className="px-2">
              <AiOutlineSearch
                className={
                  focused
                    ? 'text-xl text-tweeter-blue'
                    : 'text-xl text-gray-500'
                }
              />
            </div>
            <div className="flex-grow">
              <input
                className="w-full p-3 outline-none bg-inherit"
                type="text"
                autoComplete="list"
                placeholder="Search people"
                autoFocus={false}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e: ChangeEvent) => {
                  const input = e.target as HTMLInputElement
                  const value: string = input.value.trim()
                  const execSearch = debounce(() => search(value), 1000)
                  execSearch()
                }}
              />
            </div>
          </label>
        </div>
        {recipients.length > 0 && (
          <div className="flex items-center gap-x-2 px-3 py-2">
            {recipients.map((user: User) => (
              <button
                onClick={() => removeRecipient(user)}
                key={user.id}
                className="px-2 py-1 flex gap-x-2 rounded-2xl border border-black/50 dark:border-white/50"
                aria-label={`${user.firstName} ${user.lastName} -- Select to remove`}
              >
                <div className="flex items-center gap-x-2">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                </div>
                <div>
                  <span className="font-bold">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <div className="text-tweeter-blue flex items-center">
                  <AiOutlineClose />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col overflow-y-auto h-full">
        <ul className="list-none p-0 m-0 flex flex-col">
          {searchResults.length > 0 &&
            searchResults.map((user: User) => (
              <li key={user.username} className="flex items-stretch">
                <button
                  onClick={() => addRecipient(user)}
                  className="px-4 py-2 flex gap-x-4 flex-1 items-stretch hover:bg-black/10 dark:hover:bg-white/10"
                >
                  <div className="h-10 w-10 rounded-full bg-purple-500"></div>
                  <div className="flex flex-col flex-1 justify-start">
                    <p className="font-semibold break-words text-left">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-gray-500 text-left">{`@${user.username}`}</p>
                  </div>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </Modal>
  )
}
