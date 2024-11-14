import type { Metadata } from 'next'
import './globals.css'
import { Source_Sans_3 } from 'next/font/google'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'AIS Tracability',
  description: 'From batch number to fishery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${sourceSans.className} bg-custom-ais`}>
        {children}
      </body>
    </html>
  )
}
