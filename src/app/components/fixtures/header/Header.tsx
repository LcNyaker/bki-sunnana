import { getPayload } from 'payload'
import config from '@payload-config'
import HeaderLayout from './HeaderLayout'
import type { Nav } from '@/payload-types'

const Header = async () => {
  const payload = await getPayload({ config })

  const nav = await payload.findGlobal({
    slug: 'nav',
    depth: 2,
  })

  if (!nav) return null

  return <HeaderLayout nav={nav as Nav} />
}

export default Header
