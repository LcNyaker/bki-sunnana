import { Block } from 'payload'

export const GuideConfig: Block = {
  slug: 'guide',
  labels: { singular: 'Guide', plural: 'Guides' },
  fields: [{ name: 'add existing guide', type: 'relationship', relationTo: 'guides' }],
}
