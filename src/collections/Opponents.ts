import type { CollectionConfig } from 'payload'

export const Opponents: CollectionConfig = {
  slug: 'opponents',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
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
      name: 'city',
      type: 'text',
    },
    {
      name: 'homeArena',
      type: 'text',
    },
    {
      name: 'arenaAddress',
      type: 'text',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
