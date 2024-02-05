import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { fetchServerData } from '@/utils'
import { MOCK_ENDPOINT } from '@/constants'
import { Providers } from './providers'
import { Navbar } from '@/components'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Landing with Next-Auth',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()
  const data = await fetchServerData(MOCK_ENDPOINT)
  const {
    global: {
      navigation: { header, user },
    },
  } = data

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers sessionProps={{ session: session }}>
          <Navbar menu={{ navMenu: header, userMenu: user }} />
          <main className="min-h-screen -mt-16">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
