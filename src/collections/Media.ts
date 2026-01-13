import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: true,
  fields: [
    {
      name: 'alt',
      label: 'Alt text',
      type: 'text',
      required: true,
    },
    {
      name: 'folder',
      label: 'Folder',
      type: 'select',
      required: true,
      options: [
        { label: 'Teams', value: 'teams' },
        { label: 'Players', value: 'players' },
        { label: 'Coaches', value: 'coaches' },
        { label: 'Sponsors', value: 'sponsors' },
        { label: 'Opponents', value: 'opponents' },
        { label: 'General', value: 'general' },
      ],
      admin: {
        description: 'Used to organize images in the media library',
      },
    },
  ],
}
