import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'News',
    plural: 'News',
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
      label: 'under-rubrik',
      admin: {
        description: 'Underrubrik som visas under titeln',
      },
    },
    {
      name: 'intro',
      type: 'text',
      label: 'introtext',
      admin: {
        description: 'inledning visas i nyhetskortet',
      },
    },
    {
      name: 'buttonText',
      label: 'button text',
      type: 'text',
      defaultValue: 'Läs mer',
      admin: {
        description: 'text till knappen',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
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
              label: 'under-rubrik',
              type: 'text',
              required: false,
            },
            {
              name: 'text',
              label: 'tillhörande text',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          slug: 'imageBlock',
          labels: {
            singular: 'Image',
            plural: 'Images',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'checklist',
      type: 'array',
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Section Title',
        },
        {
          name: 'items',
          type: 'array',
          required: true,
          labels: {
            singular: 'Item',
            plural: 'Items',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Item Title',
            },
          ],
        },
      ],
    },

    {
      name: 'author',
      label: 'Author',
      type: 'group',
      fields: [
        {
          name: 'authorType',
          label: 'Typ av författare',
          type: 'radio',
          required: true,
          defaultValue: 'person',
          options: [
            { label: 'Välj person', value: 'person' },
            { label: 'Skriv manuellt', value: 'manual' },
          ],
        },
        {
          name: 'person',
          label: 'Person',
          type: 'relationship',
          relationTo: 'people',
          admin: {
            condition: (_, siblingData) => siblingData?.authorType === 'person',
          },
        },
        {
          name: 'manualName',
          label: 'Namn',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.authorType === 'manual',
          },
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Published?',
      defaultValue: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
