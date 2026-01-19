import { Block } from 'payload'

export const NewsBlockConfig: Block = {
  slug: 'newsBlock',
  labels: {
    singular: 'News holder',
    plural: 'News holders',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'undertitle',
      type: 'text',
      label: 'Undertitle',
    },
    {
      name: 'body',
      type: 'text',
      label: 'Body text',
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },

    {
      name: 'link',
      type: 'group',
      label: 'Link',
      fields: [
        {
          name: 'linkType',
          type: 'radio',
          label: 'Link type',
          defaultValue: 'internal',
          options: [
            { label: 'Internal link', value: 'internal' },
            { label: 'External link', value: 'external' },
          ],
        },
        {
          name: 'internal',
          type: 'relationship',
          relationTo: ['pages', 'news'],
          label: 'Internal page',
          admin: {
            condition: (_, siblingData) => siblingData?.linkType === 'internal',
          },
        },
        {
          name: 'external',
          type: 'text',
          label: 'External URL',
          admin: {
            condition: (_, siblingData) => siblingData?.linkType === 'external',
          },
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: true,
        },
      ],
    },
  ],
}
