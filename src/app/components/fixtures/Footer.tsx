'use client'

import React, { useState } from 'react'
import FooterMenu from '../menus/FooterMenu'

const Footer = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    information: false,
    support: false,
    shortcuts: false,
    social: false,
    app: false,
  })

  const toggleMenus = (menuKey: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }))
  }

  const menus = [
    {
      title: 'Föreningen',
      key: 'club',
      items: ['Om BKI Sunnanå', 'Historia', 'Organisation', 'Styrelsen', 'Kontakt'],
    },
    {
      title: 'Medlemmar',
      key: 'members',
      items: ['Bli medlem', 'Ledare', 'Vårdnadshavare', 'Policy & riktlinjer', 'Trygg idrott'],
    },
    {
      title: 'Verksamhet',
      key: 'sports',
      items: ['Matcher & resultat', 'Trupper', 'Nyheter', 'Evenemang'],
    },
    {
      title: 'Samarbeten',
      key: 'partners',
      items: ['Våra sponsorer', 'Bli sponsor'],
    },
    {
      title: 'Övrigt',
      key: 'legal',
      items: ['Cookies', 'Integritetspolicy', 'Tillgänglighet'],
    },
  ]

  return (
    <footer className="w-full bg-secondary-500">
      <section className="grid grid-cols-1 p-4 section-wrapper sm:grid-cols-3 sm:gap-6 md:grid-cols-5 md:p-10">
        {menus.map((menu) => (
          <FooterMenu
            key={menu.key}
            title={menu.title}
            menuKey={menu.key}
            items={menu.items}
            isOpen={openMenus[menu.key]}
            toggleMenu={toggleMenus}
          />
        ))}
      </section>

      <div className="flex flex-col items-center justify-between bg-black lg:flex-row">
        <address className="flex items-center gap-6 py-3 section-wrapper">
          <a href="tel:+14155550132">66525 Kil</a>
          <a href="mailto:noname@example.com">styrelsen@bkisunnana.se</a>
        </address>

        <div className="flex items-center gap-3 py-4"></div>
      </div>
    </footer>
  )
}

export default Footer
