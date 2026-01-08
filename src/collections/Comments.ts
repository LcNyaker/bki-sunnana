import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  access: {
    read: () => true,
    create: () => true,
    update: ({ req: { user } }) => !!user, // Endast inloggade användare
    delete: ({ req: { user } }) => !!user, // Endast inloggade användare
  },
  fields: [
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'posts',
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
  timestamps: true,
}
