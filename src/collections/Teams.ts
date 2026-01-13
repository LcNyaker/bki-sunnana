import type { CollectionConfig } from 'payload'

export const Teams: CollectionConfig = {
  slug: 'teams',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Herrar', value: 'men' },
        { label: 'Damer', value: 'women' },
      ],
    },
    {
      name: 'season',
      type: 'select',
      required: true,
      options: [{ label: '2025/2026', value: '2025/2026' }],
    },
    {
      name: 'league',
      type: 'text',
      required: true,
    },
  ],
}
