'use client'

import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { FormGroup } from '../../interfaces/form-group'
import { FormControl } from '../../interfaces/form-control'

interface TweetPollProps {
  onClosePoll: () => void
}

export default function TweetPoll({ onClosePoll }: TweetPollProps) {
  const form: FormGroup = {
    controls: [
      { id: 'choice1', type: 'text', placeholder: 'Choice 1', value: null },
      { id: 'choice2', type: 'text', placeholder: 'Choice 2', value: null },
    ],
  }

  const [formGroup, setFormGroup] = useState<FormGroup>(form)

  function handleAddChoice() {
    const n = formGroup.controls.length + 1
    setFormGroup({
      controls: [
        ...formGroup.controls,
        {
          id: `choice${n}`,
          type: 'text',
          placeholder: `Choice ${n} (Optional)`,
          value: null,
        },
      ],
    })
  }

  return (
    <div className="flex flex-col border border-black/10 rounded-xl overflow-hidden dark:border-white/10">
      {/* Choices container */}
      <div className="flex">
        {/* Choices */}
        <div className="flex flex-col flex-grow gap-y-4 px-2 py-4">
          {formGroup.controls.map((control: FormControl, index: number) => (
            <div className="flex" key={index}>
              <label htmlFor={`control.name`} className="w-full">
                <input
                  type={control.type}
                  name={control.name ?? control.id}
                  id={control.id}
                  placeholder={control.placeholder}
                  className="w-full form-field"
                />
              </label>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="flex flex-col p-2 justify-end">
          <div className="rounded-full mb-3">
            <button
              onClick={handleAddChoice}
              title="Add"
              aria-label="Add choice"
              className="rounded-full p-2 text-tweeter-blue hover:bg-tweeter-blue/10"
            >
              <MdAdd />
            </button>
          </div>
        </div>
      </div>

      {/* Poll duration */}
      <div className="flex flex-col px-2 py-4 border-y border-black/10 dark:border-white/10">
        <div>
          <span>Poll length</span>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex flex-col flex-grow border rounded border-black/10 dark:border-white/10">
            <label
              className="text-sm text-gray-500 px-2 pt-1"
              htmlFor="pollDays"
            >
              Days
            </label>
            <select
              className="bg-inherit outline-none px-2 pb-1 pr-1"
              name="pollDays"
              id="pollDays"
              defaultValue={1}
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <option
                  className="bg-white dark:bg-black"
                  value={index}
                  key={index}
                >
                  {index}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col flex-grow border rounded border-black/10 dark:border-white/10">
            <label
              className="text-sm text-gray-500 px-2 pt-1"
              htmlFor="pollHours"
            >
              Hours
            </label>
            <select
              className="bg-inherit outline-none px-2 pb-1 pr-1"
              name="pollHours"
              id="pollHours"
            >
              {Array.from({ length: 24 }).map((_, index) => (
                <option
                  className="bg-white dark:bg-black"
                  value={index}
                  key={index}
                >
                  {index}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col flex-grow border rounded border-black/10 dark:border-white/10">
            <label
              className="text-sm text-gray-500 px-2 pt-1"
              htmlFor="pollMinutes"
            >
              Minutes
            </label>
            <select
              className="bg-inherit outline-none px-2 pb-1 pr-1"
              name="pollMinutes"
              id="pollMinutes"
            >
              {Array.from({ length: 60 }).map((_, index) => (
                <option
                  className="bg-white dark:bg-black"
                  value={index}
                  key={index}
                >
                  {index}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex">
        <button
          onClick={onClosePoll}
          className="w-full text-center text-red-500 p-2 hover:bg-red-50 dark:hover:bg-red-900/10"
        >
          Remove poll
        </button>
      </div>
    </div>
  )
}
