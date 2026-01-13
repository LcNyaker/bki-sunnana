import { GlobalConfig } from 'payload'

export const Logo: GlobalConfig = {
  slug: 'logo',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
