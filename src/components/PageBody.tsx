import { ReactNode } from 'react'

export const PageBody = ({ children }: { children: ReactNode }) => {
  return <div className="mb-12 flex flex-1 overflow-y-auto">{children}</div>
}
