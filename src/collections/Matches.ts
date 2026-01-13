import type { CollectionConfig } from 'payload'

export const Matches: CollectionConfig = {
  slug: 'matches',
  admin: {
    useAsTitle: 'date',
    defaultColumns: [
      'date',
      'round',
      'team',
      'opponent',
      'teamScore',
      'opponentScore',
      'isFinished',
    ],
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'yyyy-MM-dd HH:mm',
          timeIntervals: 15,
        },
      },
    },
    {
      name: 'round',
      type: 'number',
      required: true,
    },
    {
      name: 'team',
      type: 'relationship',
      relationTo: 'teams',
      required: true,
    },
    {
      name: 'opponent',
      type: 'relationship',
      relationTo: 'opponents',
      required: true,
    },
    {
      name: 'isHomeGame',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'teamScore',
      type: 'number',
      admin: {
        condition: (_: unknown, siblingData: { isFinished?: boolean }) =>
          siblingData?.isFinished === true,
      },
    },
    {
      name: 'opponentScore',
      type: 'number',
      admin: {
        condition: (_: unknown, siblingData: { isFinished?: boolean }) =>
          siblingData?.isFinished === true,
      },
    },
    {
      name: 'isFinished',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'goals',
      type: 'array',
      admin: {
        condition: (_: unknown, siblingData: { isFinished?: boolean }) =>
          siblingData?.isFinished === true,
      },
      fields: [
        {
          name: 'period',
          type: 'select',
          required: true,
          options: [
            { label: 'Period 1', value: 'p1' },
            { label: 'Period 2', value: 'p2' },
            { label: 'Period 3', value: 'p3' },
            { label: 'Overtime', value: 'ot' },
            { label: 'Penalty shootout', value: 'so' },
          ],
        },
        {
          name: 'minute',
          type: 'text',
          required: true,
        },
        {
          name: 'teamType',
          type: 'select',
          required: true,
          options: [
            { label: 'BKI Sunnanå', value: 'own' },
            { label: 'Motståndare', value: 'opponent' },
          ],
        },
        {
          name: 'scorer',
          type: 'relationship',
          relationTo: 'players',
          admin: {
            condition: (_: unknown, siblingData: { teamType?: 'own' | 'opponent' }) =>
              siblingData?.teamType === 'own',
          },
        },
        {
          name: 'scorerName',
          type: 'text',
          required: true,
          admin: {
            condition: (_: unknown, siblingData: { teamType?: 'own' | 'opponent' }) =>
              siblingData?.teamType === 'opponent',
          },
        },
      ],
    },
  ],
}
