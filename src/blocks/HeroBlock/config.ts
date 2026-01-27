import { Block } from 'payload'

export const HeroConfig: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'body', type: 'textarea', label: 'Body' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Hero-image' },
  ],
}
