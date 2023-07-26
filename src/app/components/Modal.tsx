import React from 'react'

interface ModalProps {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="fixed flex flex-col items-center w-full h-full left-0 top-0 backdrop-contrast-50 z-10">
      <div className="flex justify-center h-screen w-full">{children}</div>
    </div>
  )
}
