import Link from 'next/link'
import type { Nav } from '@/payload-types'

type DesktopNavProps = {
  items: Nav['items']
}

const DesktopNav = ({ items }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-4">
        {items.map((item) => {
          if (item.type !== 'internal') return null

          const href =
            typeof item.page === 'object' && item.page?.slug ? `/${item.page.slug}` : null

          if (!href) {
            return null
          }

          return (
            <li key={item.label}>
              <Link
                aria-label={`Gå till ${item.label}`}
                href={href}
                className="
                  relative whitespace-nowrap
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-white
                  after:transition-all hover:after:w-full
                "
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default DesktopNav
