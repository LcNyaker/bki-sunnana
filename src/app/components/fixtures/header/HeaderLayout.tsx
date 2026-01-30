import Image from 'next/image'
import Link from 'next/link'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { FloorballIcon } from '@/app/assets/Icons/FloorballIcon'
import type { Nav } from '@/payload-types'

type HeaderLayoutProps = {
  nav: Nav
}

const HeaderLayout = ({ nav }: HeaderLayoutProps) => {
  const logo = typeof nav.logo === 'object' && nav.logo !== null ? nav.logo : null

  return (
    <header className="w-full bg-black sticky top-0 z-50 text-white">
      <section className="section-wrapper overflow-hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="py-2 flex-1" aria-label={`Gå till startsidan`}>
            <Image
              src={logo?.url || '/logo.png'}
              alt={logo?.alt || 'BKI Sunnana Logo'}
              width={70}
              height={70}
              priority
            />
          </Link>
          <DesktopNav items={nav.items} />
          <div className="relative hidden md:flex flex-1 justify-center">
            <div className="hidden lg:flex">
              <div className="absolute -top-20 right-0 text-gray-700">
                <FloorballIcon size={150} />
              </div>
            </div>
          </div>
          <MobileNav items={nav.items} />
        </div>
      </section>
    </header>
  )
}

export default HeaderLayout
