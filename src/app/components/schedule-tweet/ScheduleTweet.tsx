'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { TbCalendarTime } from 'react-icons/tb'

interface Month {
  displayText: string
  value: number
}
const MONTHS: Month[] = [
  { displayText: 'January', value: 0 },
  { displayText: 'February', value: 1 },
  { displayText: 'March', value: 2 },
  { displayText: 'April', value: 3 },
  { displayText: 'May', value: 4 },
  { displayText: 'June', value: 5 },
  { displayText: 'July', value: 6 },
  { displayText: 'August', value: 7 },
  { displayText: 'September', value: 8 },
  { displayText: 'October', value: 9 },
  { displayText: 'November', value: 10 },
  { displayText: 'December', value: 11 },
]

interface ScheduledTweetDate {
  month: number
  date: number
  year: number
  hour: number
  minute: number
}

export default function ScheduleTweet() {
  const router = useRouter()
  const today = new Date()
  const timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone
  const defaultScheduledDate = new Date(new Date().setDate(today.getDate() + 5))
  const isTwelveHourClock = navigator.language.includes('en')
  const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: timezone,
  })

  const timeFormatter = new Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: isTwelveHourClock,
    timeZone: timezone,
  })

  const [scheduledDate, setScheduledDate] = useState<ScheduledTweetDate>({
    month: defaultScheduledDate.getMonth() + 1,
    date: defaultScheduledDate.getDate(),
    year: defaultScheduledDate.getFullYear(),
    hour: defaultScheduledDate.getHours(),
    minute: defaultScheduledDate.getMinutes(),
  })

  function getFormattedDate() {
    return dateFormatter.format(defaultScheduledDate)
  }

  function getFormattedTime() {
    return timeFormatter.format(defaultScheduledDate)
  }

  function handleOpenDatePicker() {
    const datepicker = document.getElementById('datepicker') as HTMLInputElement
    datepicker.showPicker()
  }

  function handleSelectedDate(event: FormEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement
    const tokens = input.value.split('-') // 2023-01-01 (year-month-day)
    const year = parseInt(tokens[0])
    const month = parseInt(tokens[1])
    const date = parseInt(tokens[2])

    setScheduledDate({
      ...scheduledDate,
      year,
      month,
      date,
    })
  }

  function handleMonthChange(event: FormEvent<HTMLSelectElement>) {
    const input = event.target as HTMLInputElement
    const month = parseInt(input.value)
    setScheduledDate({
      ...scheduledDate,
      month,
    })
  }

  function handleDayChange(event: FormEvent<HTMLSelectElement>) {
    const input = event.target as HTMLInputElement
    const date = parseInt(input.value)
    setScheduledDate({
      ...scheduledDate,
      date,
    })
  }

  function handleYearChange(event: FormEvent<HTMLSelectElement>) {
    const input = event.target as HTMLInputElement
    const year = parseInt(input.value)
    setScheduledDate({
      ...scheduledDate,
      year,
    })
  }

  function handleHourChange(event: FormEvent<HTMLSelectElement>) {
    const input = event.target as HTMLInputElement
    const hour = parseInt(input.value)
    setScheduledDate({
      ...scheduledDate,
      hour,
    })
  }

  function handleMinuteChange(event: FormEvent<HTMLSelectElement>) {
    const input = event.target as HTMLInputElement
    const minute = parseInt(input.value)
    setScheduledDate({
      ...scheduledDate,
      minute,
    })
  }

  function handleBackButton() {
    router.push('/home')
  }

  return (
    <div className="flex flex-col rounded-xl bg-white dark:bg-black w-screen h-screen md:w-[600px] md:h-fit md:mt-12">
      <div className="flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-x-4">
          <button
            onClick={handleBackButton}
            title="Close"
            aria-label="Close dialog"
            className="rounded-full dark:hover:bg-white/10 hover:bg-black/10 p-2"
          >
            <MdClose />
          </button>
          <h2 className="font-bold text-2xl">Schedule</h2>
        </div>
        <button className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-semibold">
          Confirm
        </button>
      </div>

      <div className="flex items-center gap-x-4 text-gray-500 p-4">
        <div>
          <TbCalendarTime />
        </div>
        <span>
          Will send on {getFormattedDate()} at {getFormattedTime()}
        </span>
      </div>

      <div className="flex flex-col gap-y-4 p-4">
        {/* Date portion */}
        <div className="flex flex-col">
          <p className="text-gray-500">Date</p>
          <div className="flex items-center gap-x-2">
            <div className="form-field-select">
              <label htmlFor="month">Month</label>
              <select
                onChange={handleMonthChange}
                id="month"
                value={scheduledDate.month - 1}
              >
                {MONTHS.map((month: Month) => (
                  <option value={month.value} key={month.value}>
                    {month.displayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field-select">
              <label htmlFor="day">Day</label>
              <select
                onChange={handleDayChange}
                id="day"
                value={scheduledDate.date}
              >
                {Array.from({ length: 31 }).map((_, i) => (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field-select">
              <label htmlFor="year">Year</label>
              <select
                onChange={handleYearChange}
                id="year"
                value={scheduledDate.year}
              >
                {Array.from({ length: 2 }).map((_, i) => (
                  <option
                    value={today.getFullYear() + i}
                    key={today.getFullYear() + i}
                  >
                    {today.getFullYear() + i}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <button
                onClick={handleOpenDatePicker}
                className="rounded-full p-4 hover:bg-black/10 dark:hover:bg-white/10"
                title="Choose date"
                aria-label="Choose date"
              >
                <BsCalendarDate />
              </button>
              <input
                type="date"
                name="Date"
                id="datepicker"
                min={today.toISOString().split('T').at(0)}
                onChange={handleSelectedDate}
                className="opacity-0 absolute top-0 right-0 bottom-0 h-0 w-0"
              />
            </div>
          </div>
        </div>

        {/* Time portion */}
        <div className="flex flex-col">
          <p className="text-gray-500">Time</p>
          <div className="flex items-center gap-x-2">
            {/* Hour */}
            <div className="form-field-select">
              <label htmlFor="hour">Hour</label>
              <select
                id="hour"
                value={
                  isTwelveHourClock
                    ? scheduledDate.hour > 12
                      ? scheduledDate.hour - 12
                      : scheduledDate.hour
                    : scheduledDate.hour
                }
                onChange={handleHourChange}
              >
                {Array.from({ length: isTwelveHourClock ? 12 : 23 }).map(
                  (_, i) => (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  )
                )}
              </select>
            </div>
            {/* Minute */}
            <div className="form-field-select">
              <label htmlFor="minute">Minute</label>
              <select
                id="minute"
                value={scheduledDate.minute}
                onChange={handleMinuteChange}
              >
                <optgroup label="Common">
                  <option value="0">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </optgroup>
                <optgroup label="All">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <option value={i} key={i}>
                      {i}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
            {
              /* AM / PM */
              isTwelveHourClock && (
                <div className="form-field-select">
                  <label htmlFor="ampm">AM / PM</label>
                  <select
                    id="ampm"
                    defaultValue={scheduledDate.hour > 12 ? 'pm' : 'am'}
                  >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10 p-4">
        <button
          onClick={() => router.push('/compose/tweet/unsent/scheduled')}
          className="rounded-full text-tweeter-blue font-semibold px-3 py-1 dark:hover:bg-tweeter-blue/10"
        >
          Scheduled Tweets
        </button>
      </div>
    </div>
  )
}
