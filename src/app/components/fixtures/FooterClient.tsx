'use client'

import React, { useState } from 'react'
import FooterMenu from '../menus/FooterMenu'
import { Footer } from '@/payload-types'
import Link from 'next/link'
import { FacebookLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react'

type FooterProps = {
  footer: Footer
}

const FooterClient = ({ footer }: FooterProps) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    club: false,
    members: false,
    sports: false,
    partners: false,
    legal: false,
  })

  const toggleMenus = (menuKey: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }))
  }

  console.log(footer.socials)
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
      <div className="section-wrapper">
        <section className="grid grid-cols-1 sm:grid-cols-3 sm:gap-6 md:grid-cols-5 md:py-10">
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
        <div className="relative">
          <div className="absolute right-0 bottom-0 flex gap-2 justify-end">
            {footer.socials?.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="hover:text-white"
              >
                {social.platform === 'facebook' && <FacebookLogoIcon size={80} />}
                {social.platform === 'instagram' && <InstagramLogoIcon size={80} />}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-black text-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 section-wrapper">
          <div className="flex flex-col justify-between py-3">
            <div className="flex flex-col items-center md:flex-row">
              <address className="flex items-center gap-6">
                <a href="tel:+14155550132">66525 Kil</a>
                <a href="mailto:noname@example.com">styrelsen@bkisunnana.se</a>
              </address>
            </div>
            <span className="hidden md:flex">{footer.copyrightText}</span>
          </div>
          <div className="py-3 flex justify-end">
            <p className="w-full xl:w-4/5 text-center md:text-right">{footer.creds}</p>
          </div>
        </div>
        <div className="flex md:hidden justify-center py-3">
          <span className="">{footer.copyrightText}</span>
        </div>
      </section>
    </footer>
  )
}

export default FooterClient
