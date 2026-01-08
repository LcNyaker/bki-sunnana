'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ListIcon, UserIcon, XIcon } from '@phosphor-icons/react'
import Link from 'next/link'

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
    w-full bg-black section-wrapper
    ${isSubNavSticky ? '-translate-y-full' : 'translate-y-0'}
  `}
      >
        <div className="flex items-center justify-between">
          <section className="flex-1 py-4">
            <Image src="/logo.png" alt="BKI Sunnanå logotyp" width={90} height={90} />
          </section>

          <section>
            <h1 className="h1">BKI Sunnanå – En klubb för alla</h1>
          </section>
          <section className="flex-1 hidden md:flex justify-center">
            <div className="flex ">
              <span> SVG framöver</span>
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
      </header>

      <div ref={subNavSentinelRef} />
      <nav className="sticky top-0 z-40 hidden section-wrapper md:flex bg-black border-t border-white/10 justify-between">
        <ul className="flex flex-wrap gap-6 py-3 ">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button>
          <UserIcon size={32} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setMenuOpen(false)} />
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
      </aside>
    </>
  )
}
