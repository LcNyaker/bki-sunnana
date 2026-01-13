import { Block } from 'payload'

export const ImageTextBlockConfig: Block = {
  slug: 'imageTextBlock',
  labels: {
    singular: 'Image + Text block',
    plural: 'Image + Text blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },

    {
      name: 'body',
      type: 'text',
      label: 'Body text',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background color',
      defaultValue: 'white',
      options: [
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
        { label: 'Primary', value: 'primary-500' },
        { label: 'Secondary', value: 'secondary-500' },
        { label: 'Tertiary', value: 'tertiary-500' },
      ],
    },
    {
      name: 'textColor',
      type: 'select',
      label: 'Text color',
      defaultValue: 'black',
      options: [
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
      ],
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
        {
          name: 'buttonColor',
          type: 'select',
          label: 'Button color',
          defaultValue: 'primary-500',
          options: [
            { label: 'Primary', value: 'primary-500' },
            { label: 'Secondary', value: 'secondary-500' },
            { label: 'Tertiary', value: 'tertiary-500' },
            { label: 'Black', value: 'black' },
            { label: 'White', value: 'white' },
          ],
        },
      ],
    },

    {
      name: 'fullwidth',
      type: 'checkbox',
      label: 'Full width (no side padding)',
      defaultValue: false,
    },

    {
      name: 'imageLeft',
      type: 'checkbox',
      label: 'Image to the left side',
      defaultValue: true,
    },
  ],
}
