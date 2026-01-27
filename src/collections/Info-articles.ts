import type { CollectionConfig } from 'payload'

export const InfoArticles: CollectionConfig = {
  slug: 'info-articles',
  labels: {
    singular: 'Information Article',
    plural: 'Information Articles',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Under-rubrik',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL-slug (t.ex. "om-oss", "stadgar", "medlemskap")',
      },
    },
    {
      name: 'content',
      type: 'blocks',
      required: true,
      blocks: [
        {
          slug: 'textBlock',
          labels: {
            singular: 'Text',
            plural: 'Text blocks',
          },
          fields: [
            {
              name: 'subtitle',
              label: 'Under-rubrik',
              type: 'text',
            },
            {
              name: 'text',
              label: 'Text',
              type: 'richText',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Published?',
      defaultValue: false,
    },
  ],
}
