'use client'

import { useState, useEffect } from 'react'
import { ListIcon } from '@phosphor-icons/react'
import MobileMenu from '../../menus/MobileMenu'
import type { Nav } from '@/payload-types'

type MobileNavProps = {
  items: Nav['items']
}

const MobileNav = ({ items }: MobileNavProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <>
      <button
        className="md:hidden"
        aria-label="Öppna mobilmeny"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <ListIcon size={32} />
      </button>

      {open && <MobileMenu open={open} setOpen={setOpen} items={items} />}
    </>
  )
}

export default MobileNav
