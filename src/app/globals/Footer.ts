import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true, // Alla kan läsa footer
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',

      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },

        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                description: 'Relativ URL (t.ex. /about) eller absolut (https://...)',
              },
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Öppna i ny flik',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'GitHub', value: 'github' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© 2025 Your Company. All rights reserved.',
    },
  ],
}
