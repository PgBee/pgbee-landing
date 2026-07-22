import './globals.css'
import type { Metadata } from 'next'
import { Red_Hat_Display, Unbounded } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-unbounded',
})

export const metadata: Metadata = {
  title: {
    default: 'PgBee | Find verified PGs and hostels near your college',
    template: '%s | PgBee',
  },
  description: 'Compare verified PGs, hostels and rooms near your college with PgBee.',
  metadataBase: new URL('https://www.pgbee.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PgBee | Find your perfect student stay',
    description: 'Compare verified PGs, hostels and rooms near your college with PgBee.',
    url: 'https://www.pgbee.in',
    siteName: 'PgBee',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/hero-image.png',
        width: 798,
        height: 1125,
        alt: 'PgBee student accommodation search app',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PgBee | Find your perfect student stay',
    description: 'Compare verified PGs, hostels and rooms near your college with PgBee.',
    images: ['/hero-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${redHatDisplay.className} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  )
}
