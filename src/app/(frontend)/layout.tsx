export const dynamic = 'force-dynamic'

import React from 'react'
import './globals.scss'
import { Inter, Poppins } from 'next/font/google'
import Footer from '@/app/components/fixtures/Footer'
import Header from '@/app/components/fixtures/header/Header'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: {
    default: 'BKI Sunnanå – Examensarbete i Frontend Development',
    template: '%s | BKI Sunnanå (Examensarbete)',
  },

  description:
    'Detta är ett examensarbete där en modern, tillgänglig och innehållsdriven webbplattform för den fiktiva sportklubben BKI Sunnanå utvecklas med Next.js och headless CMS.',

  keywords: [
    'examensarbete',
    'frontend development',
    'Next.js',
    'Payload CMS',
    'headless cms',
    'sportklubb',
    'innebandy',
    'BKI Sunnanå',
    'tillgänglig webb',
    'webbdesign',
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
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
