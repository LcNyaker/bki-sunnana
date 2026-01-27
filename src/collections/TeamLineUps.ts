import type { CollectionConfig } from 'payload'

export const TeamLineups: CollectionConfig = {
  slug: 'team-lineups',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
      type: 'text',
      required: true,
      admin: {
        description: 'Ex: Herrar 2025/26 – Lagbild',
      },
    },
    {
      name: 'team',
      label: 'Lag',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
    {
      name: 'season',
      label: 'Säsong',
      type: 'text',
      required: true,
      admin: {
        placeholder: '2025/2026',
      },
    },
    {
      name: 'image',
      label: 'Lagbild',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'hotspots',
      label: 'Spelare i bild',
      type: 'array',
      fields: [
        {
          name: 'player',
          label: 'Spelare',
          type: 'relationship',
          relationTo: 'players',
          required: true,
        },
        {
          name: 'x',
          label: 'X-position (%)',
          type: 'number',
          required: true,
          min: 0,
          max: 100,
        },
        {
          name: 'y',
          label: 'Y-position (%)',
          type: 'number',
          required: true,
          min: 0,
          max: 100,
        },
      ],
    },
  ],
}
