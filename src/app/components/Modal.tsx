import React from 'react'

interface ModalProps {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="fixed flex flex-col items-center w-full h-full left-0 top-0 backdrop-contrast-50 z-10">
      <div className="flex justify-center h-screen w-screen">
        <div className="flex flex-col items-center justify-center">
          <div
            role="dialog"
            className="overflow-hidden rounded-xl bg-white dark:bg-black z-10 w-full md:w-[600px] md:h-[600px]"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
