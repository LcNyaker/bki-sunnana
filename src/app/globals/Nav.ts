import { GlobalConfig } from 'payload'

export const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Navigation',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      labels: {
        singular: 'Navigation Item',
        plural: 'Navigation Items',
      },
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          defaultValue: 'internal',
          options: [
            { label: 'Internal Page', value: 'internal' },
            { label: 'External Link', value: 'external' },
            { label: 'Dropdown Menu', value: 'dropdown' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'Text som visas i navigationen',
          },
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'internal',
            description: 'Välj en intern sida',
          },
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'external',
            description: 'URL för extern länk (t.ex. https://example.com)',
          },
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'external',
            description: 'Öppna länken i ny flik',
          },
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Home', value: 'home' },
            { label: 'User', value: 'user' },
            { label: 'Settings', value: 'settings' },
            { label: 'Book', value: 'book' },
            { label: 'Star', value: 'star' },
          ],
          defaultValue: 'none',
          admin: {
            description: 'Valfri ikon (kan användas med Phosphor Icons)',
          },
        },
        {
          name: 'subItems',
          type: 'array',
          maxRows: 6,
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'dropdown',
            description: 'Undermeny-items för dropdown',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
            },
            {
              name: 'description',
              type: 'textarea',
              maxLength: 100,
              admin: {
                description: 'Kort beskrivning (visas under länken)',
              },
            },
          ],
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Framhäv denna länk (t.ex. CTA-knapp)',
          },
        },
        {
          name: 'showOnMobile',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Visa i mobil-navigation',
          },
        },
        {
          name: 'requiresAuth',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Kräver inloggning för att visa',
          },
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Logo för navigationen',
      },
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'CTA Button',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'label',
          type: 'text',
          admin: {
            condition: (data) => data?.ctaButton?.enabled,
          },
        },
        {
          name: 'link',
          type: 'text',
          admin: {
            condition: (data) => data?.ctaButton?.enabled,
          },
        },
        {
          name: 'style',
          type: 'select',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          admin: {
            condition: (data) => data?.ctaButton?.enabled,
          },
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media Links',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'github',
          type: 'text',
          admin: {
            condition: (data) => data?.socialLinks?.enabled,
          },
        },
        {
          name: 'twitter',
          type: 'text',
          admin: {
            condition: (data) => data?.socialLinks?.enabled,
          },
        },
        {
          name: 'linkedin',
          type: 'text',
          admin: {
            condition: (data) => data?.socialLinks?.enabled,
          },
        },
      ],
    },
    {
      name: 'settings',
      type: 'group',
      label: 'Navigation Settings',
      fields: [
        {
          name: 'sticky',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Sticky navigation (följer med vid scroll)',
          },
        },
        {
          name: 'transparent',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Transparent bakgrund (tills användaren scrollar)',
          },
        },
        {
          name: 'showBreadcrumbs',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Visa breadcrumbs under navigationen',
          },
        },
      ],
    },
  ],
}
