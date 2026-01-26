import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: () => true,
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
      name: 'socials',
      type: 'array',
      label: 'Sociala Medier',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
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
      name: 'contact',
      type: 'array',
      label: 'Kontaktuppgifter',
      fields: [
        {
          name: 'postcode',
          type: 'number',
          label: 'postnummer',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          label: 'stad',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          label: 'epostadress',
          required: true,
        },
      ],
    },
    {
      name: 'creds',
      type: 'text',
      label: 'Kreditering',
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© 2025 Your Company. All rights reserved.',
    },
  ],
}
