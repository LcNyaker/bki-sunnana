import type { GlobalConfig } from 'payload'

export const ClubArenas: GlobalConfig = {
  slug: 'club-arenas',
  label: 'Club arenas',
  fields: [
    {
      name: 'arenas',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'isPrimary',
          label: 'Primary arena',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'address',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
