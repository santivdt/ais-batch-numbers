import type { Metadata } from 'next'
import './globals.css'

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
      <body className='font-metallophile bg-custom-ais'>{children}</body>
    </html>
  )
}
