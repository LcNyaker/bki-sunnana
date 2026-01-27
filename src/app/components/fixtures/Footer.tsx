import { getPayload } from 'payload'
import config from '@payload-config'
import FooterClient from './FooterClient'

const Footer = async () => {
  const payload = await getPayload({ config })

  const footer = await payload.findGlobal({
    slug: 'footer',
    depth: 3,
  })

  if (!footer) return null

  return <FooterClient footer={footer} />
}

export default Footer
