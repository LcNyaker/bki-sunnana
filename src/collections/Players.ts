import type { CollectionConfig } from 'payload'

export const Players: CollectionConfig = {
  slug: 'players',
  labels: {
    singular: 'Player',
    plural: 'Players',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'forename',
      type: 'text',
      required: true,
    },
    {
      name: 'lastname',
      type: 'text',
      required: true,
    },
    {
      name: 'fullName',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'dateOfBirth',
      label: 'Date of birth',
      type: 'date',
      required: true,
    },
    {
      name: 'position',
      type: 'select',
      required: true,
      options: [
        { label: 'Back', value: 'back' },
        { label: 'Forward', value: 'forward' },
        { label: 'Center', value: 'center' },
        { label: 'Goalie', value: 'goalie' },
      ],
    },
    {
      name: 'stickSide',
      label: 'Stick side',
      type: 'select',
      required: true,
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'None', value: 'none' },
      ],
    },
    {
      name: 'jerseyNumber',
      label: 'Jersey number',
      type: 'number',
      required: true,
      min: 1,
      max: 99,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
  ],
}
