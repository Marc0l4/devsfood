import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-screen">{children}</div>
}
