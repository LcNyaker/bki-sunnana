'use client'

import Link from 'next/link'
import { XIcon } from '@phosphor-icons/react'
import { PenguinIcon } from '@/app/assets/Icons/PenguinIcon'
import type { Nav } from '@/payload-types'

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
  items: Nav['items']
}

const MobileMenu = ({ open, setOpen, items }: Props) => {
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/40 z-49" onClick={() => setOpen(false)} />}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[80%] max-w-sm
          bg-black text-white
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-lg font-semibold">Meny</span>
          <button aria-label="Stäng mobilmeny" onClick={() => setOpen(false)}>
            <XIcon size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-lg">
          {items.map((item) => {
            if (item.type !== 'internal') return null

            const href =
              typeof item.page === 'object' && item.page?.slug ? `/${item.page.slug}` : null

            if (!href) {
              return null
            }

            return (
              <Link key={item.label} href={href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="absolute right-0 bottom-0 text-gray-700">
          <PenguinIcon size={200} />
        </div>
      </aside>
    </>
  )
}

export default MobileMenu
