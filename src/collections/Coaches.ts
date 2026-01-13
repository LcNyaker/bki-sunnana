import type { CollectionConfig } from 'payload'

export const Coaches: CollectionConfig = {
  slug: 'coaches',
  labels: {
    singular: 'Coach',
    plural: 'Coaches',
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
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'head-coach', value: 'head-coach' },
        { label: 'assistant-coach', value: 'assistant-coach' },
        { label: 'equipment-manager', value: 'equipment-manager' },
      ],
    },

    {
      name: 'email',
      type: 'email',
      required: true,
    },

    {
      name: 'phone',
      label: 'Phone number',
      type: 'text',
      required: false,
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
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
  ],
}
