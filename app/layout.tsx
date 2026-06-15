import './globals.css'
import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PgBee',
  description: 'Accommodation in one tap - Find the best PGs, hostels and rooms nearby',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={redHatDisplay.className}>
      <body>{children}</body>
    </html>
  )
}
