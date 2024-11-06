import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  status: boolean
  onClose: (newStatus: boolean) => void
}

export const Modal = ({ children, status, onClose }: Props) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-[900] ${status ? 'flex' : 'hidden'} items-center justify-center bg-black/70`}
    >
      <div
        onClick={() => onClose(false)}
        className="mb-80 mr-4 cursor-pointer text-3xl font-bold"
      >
        X
      </div>
      <div className="max-h-[95vh] max-w-[100vw] overflow-auto rounded-2xl bg-white text-black shadow-lg shadow-black">
        {children}
      </div>
    </div>
  )
}
