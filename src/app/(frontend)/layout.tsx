import React from 'react'
import './globals.scss'
import { Inter, Poppins } from 'next/font/google'

// app/layout.tsx
/* import { getPayload } from 'payload'
import config from '@payload-config' */
import Footer from '@/app/components/fixtures/Footer'
import Header from '@/app/components/fixtures/header/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  /* const payload = await getPayload({ config }) */

  return (
    <html lang="sv" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col">
        <Header />
        <main className="flex-1 mb-20 z-15 relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
