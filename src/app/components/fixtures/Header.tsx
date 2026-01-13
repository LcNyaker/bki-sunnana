'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ListIcon, UserIcon, XIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import { FloorballIcon } from '../../assets/Icons/FloorballIcon'
import { PenguinIcon } from '../../assets/Icons/PenguinIcon'

const NAV_ITEMS = [
  { label: 'Nyheter', href: '/nyheter' },
  { label: 'Matcher', href: '/matcher' },
  { label: 'Trupper', href: '/trupper' },
  { label: 'Information', href: '/information' },
  { label: 'Om oss', href: '/om-oss' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSubNavSticky, setIsSubNavSticky] = useState(false)
  const subNavSentinelRef = React.useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSubNavSticky(!entry.isIntersecting)
      },
      {
        threshold: 0,
      },
    )

    if (subNavSentinelRef.current) {
      observer.observe(subNavSentinelRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
      <header
        className={`
    w-full bg-black sticky top-0 z-10 text-white
    ${isSubNavSticky ? '-translate-y-full' : 'translate-y-0'}
  `}
      >
        <section className="section-wrapper">
          <section className="bg-gray-700"></section>
          <div className="flex items-center justify-between overflow-hidden">
            <section className="flex-1 py-2">
              <Link href={'/'}>
                <Image src="/logo.png" alt="BKI Sunnanå logotyp" width={40} height={40} />
              </Link>
            </section>

            <nav className=" z-40 hidden md:flex justify-between">
              <ul className="flex flex-wrap gap-6 ">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative text-xs whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <button>
                  <UserIcon size={20} />
                </button>
              </ul>
            </nav>
            <section className="flex-1 relative hidden md:flex justify-center">
              <div className="absolute -top-20 right-0 text-gray-700">
                <FloorballIcon size={200} />
              </div>
            </section>

            <button
              className="md:hidden pr-4 hover: "
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <ListIcon size={32} />
            </button>
          </div>
        </section>
      </header>

      <div ref={subNavSentinelRef} />

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[80%] max-w-sm
          bg-black 
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-lg font-semibold">Meny</span>
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <XIcon size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-lg">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-gray-700 absolute right-0 bottom-0 z-51">
          <PenguinIcon size={200} />
        </div>
      </aside>
    </>
  )
}
