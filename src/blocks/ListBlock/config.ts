import { Block } from 'payload'

export const ListConfig: Block = {
  slug: 'list-block', // unikt namn som används i collections
  labels: {
    singular: 'List Block',
    plural: 'List Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'Latest Posts',
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Number of Posts',
      defaultValue: 3,
      min: 1,
      max: 10,
    },
  ],
}
