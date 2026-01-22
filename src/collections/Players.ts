import type { CollectionConfig } from 'payload'

export const Players: CollectionConfig = {
  slug: 'players',
  admin: {
    useAsTitle: 'fullName',
  },
  hooks: {
    beforeValidate: [
      async ({ data, req, originalDoc }) => {
        if (!data) {
          return data
        }

        if (data.forename && data.lastname) {
          data.fullName = `${data.forename} ${data.lastname}`
        }

        if (data.fullName && !data.slug) {
          data.slug = data.fullName
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        }

        if (data.position === 'goalie') {
          data.stickSide = 'none'
        }

        if (!data.team || !data.jerseyNumber) {
          return data
        }

        const existingPlayers = await req.payload.find({
          collection: 'players',
          where: {
            and: [
              {
                team: {
                  equals: data.team,
                },
              },
              {
                jerseyNumber: {
                  equals: data.jerseyNumber,
                },
              },
            ],
          },
        })

        const conflict = existingPlayers.docs.find((player) => player.id !== originalDoc?.id)

        if (conflict) {
          throw new Error(`Tröjnummer ${data.jerseyNumber} är redan upptaget i detta lag.`)
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
    },
    {
      name: 'lastname',
      type: 'text',
      required: true,
    },
    {
      name: 'fullName',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'dateOfBirth',
      type: 'date',
      required: true,
    },
    {
      name: 'position',
      type: 'select',
      required: true,
      options: [
        { label: 'Back', value: 'back' },
        { label: 'Forward', value: 'forward' },
        { label: 'Center', value: 'center' },
        { label: 'Goalie', value: 'goalie' },
      ],
    },
    {
      name: 'stickSide',
      label: 'Stick side',
      type: 'select',
      required: true,
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'None', value: 'none' },
      ],
      admin: {
        condition: (
          _: unknown,
          siblingData: { position?: 'back' | 'forward' | 'center' | 'goalie' },
        ) => siblingData?.position !== 'goalie',
      },
    },
    {
      name: 'jerseyNumber',
      type: 'number',
      required: true,
      min: 1,
      max: 99,
    },
    {
      name: 'images',
      label: 'Bilder',
      type: 'group',
      fields: [
        {
          name: 'profile',
          label: 'Profilbild',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'portrait',
          label: 'Stående bild',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
  ],
}
