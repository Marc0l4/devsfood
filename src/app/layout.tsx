import type { Metadata } from 'next'
import './globals.css'
import { Container } from '@/components/Container'
import { PageBody } from '@/components/PageBody'
import { Cart } from '@/components/Cart'

export const metadata: Metadata = {
  title: 'DevsFood',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[url(/assets/bg.png)] bg-repeat text-white">
        <Container>
          <PageBody>{children}</PageBody>
          <Cart />
        </Container>
      </body>
    </html>
  )
}
