import { Block } from 'payload'

export const BannerConfig: Block = {
  slug: 'banner',
  labels: { singular: 'Banner', plural: 'Banners' },
  fields: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'body', type: 'textarea', label: 'Body' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Hero-image' },
  ],
}
