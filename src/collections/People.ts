import type { CollectionConfig } from 'payload'

const ROLE_LABELS: Record<string, string> = {
  chairman: 'Ordförande',
  'vice-chairman': 'Vice ordförande',
  secretary: 'Sekreterare',
  treasurer: 'Kassör',
  member: 'Ledamot',
  substitute: 'Suppleant',
  'player-manager': 'Spelaransvarig',
  editor: 'Redaktör',
}

export const People: CollectionConfig = {
  slug: 'people',

  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'role', 'email', 'published'],
  },

  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data

        if (data.forename && data.lastName && data.role) {
          const roleLabel = ROLE_LABELS[data.role] ?? data.role
          data.fullName = `${data.forename} ${data.lastName} – ${roleLabel}`
        }

        return data
      },
    ],
  },

  fields: [
    {
      name: 'forename',
      type: 'text',
      required: true,
      label: 'Förnamn',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: 'Efternamn',
    },
    {
      name: 'fullName',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      label: 'Roll',
      options: [
        { label: 'Ordförande', value: 'chairman' },
        { label: 'Vice ordförande', value: 'vice-chairman' },
        { label: 'Sekreterare', value: 'secretary' },
        { label: 'Kassör', value: 'treasurer' },
        { label: 'Ledamot', value: 'member' },
        { label: 'Suppleant', value: 'substitute' },
        { label: 'Spelaransvarig', value: 'player-manager' },
        { label: 'Redaktör', value: 'editor' },
      ],
    },
    {
      name: 'responsibility',
      type: 'select',
      label: 'Ansvarsområde',
      admin: {
        condition: (_: unknown, siblingData: { role?: 'player-manager' }) =>
          siblingData?.role === 'player-manager',
      },
      options: [
        { label: 'Barn (0–11 år)', value: 'children' },
        { label: 'Juniorer', value: 'junior' },
        { label: 'Seniorer', value: 'senior' },
      ],
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'E-post',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      label: 'Publicerad',
    },
  ],
}
