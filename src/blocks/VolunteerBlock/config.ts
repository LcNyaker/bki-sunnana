import type { Block } from 'payload'

export const VolunteersConfig: Block = {
  slug: 'volunteers',
  labels: {
    singular: 'Volunteers Section',
    plural: 'Volunteers Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Människorna bakom klubben',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Här hittar du oss som jobbar ideellt...',
    },
  ],
}
