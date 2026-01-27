import { Block } from 'payload'

export const BannerConfig: Block = {
  slug: 'banner',
  labels: {
    singular: 'Banner',
    plural: 'Banners',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
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
      name: 'fullwidth',
      type: 'checkbox',
      label: 'Full width (no side padding)',
      defaultValue: false,
    },
  ],
}
