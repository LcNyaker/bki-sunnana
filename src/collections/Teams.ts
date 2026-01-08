import type { CollectionConfig } from 'payload'

export const Teams: CollectionConfig = {
  slug: 'teams',
  labels: {
    singular: 'Team',
    plural: 'Teams',
  },
  access: {
    read: () => true,
  },
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
      name: 'ageGroup',
      label: 'Age group',
      type: 'text',
      required: false,
      admin: {
        description: 'Optional (e.g. U16, U18, Senior)',
      },
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'players',
      type: 'relationship',
      relationTo: 'players',
      hasMany: true,
      admin: {
        readOnly: true,
        description: 'Players connected to this team',
      },
    },
    {
      name: 'Coaches',
      label: 'Coaches',
      type: 'relationship',
      relationTo: 'coaches',
      hasMany: true,
      admin: {
        readOnly: true,
        description: 'Staff members connected to this team',
      },
    },
  ],
}
