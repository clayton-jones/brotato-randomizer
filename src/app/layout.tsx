import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brotato Randomizer & Challenge Tracker',
  description: 'Randomized Brotato Characters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
