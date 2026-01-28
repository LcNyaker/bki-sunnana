'use client'

import { CaretDownIcon } from '@phosphor-icons/react'

interface FooterMenuProps {
  title: string
  menuKey: string
  items: string[]
  isOpen: boolean
  toggleMenu: (key: string) => void
}

const FooterMenu = ({ title, menuKey, items, isOpen, toggleMenu }: FooterMenuProps) => {
  return (
    <div className="text-black">
      <button
        aria-label={`Öppna meny för ${title}`}
        onClick={() => toggleMenu(menuKey)}
        className="sm:pointer-none: flex cursor-pointer justify-between sm:pb-2 gap-2 sm:pointer-events-none sm:cursor-default"
      >
        <h2 className="font-sans font-bold text-lg">{title}</h2>
        <CaretDownIcon
          size={32}
          className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''} sm:hidden`}
        />
      </button>

      <ul
        className={`overflow-hidden transition-all duration-500 ease-in-out sm:overflow-visible mb-2 ${
          isOpen
            ? 'max-h-96 opacity-100 sm:flex-col'
            : 'max-h-0 opacity-0 sm:max-h-96 sm:opacity-100'
        }`}
      >
        {items.map((item, index) => (
          <li className="py-0.5" key={index}>
            <span className="footer-span block">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterMenu
