import { Block } from 'payload'

export const TestConfig: Block = {
  slug: 'test',
  labels: { singular: 'Test', plural: 'Tests' },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Body',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Block-image',
      required: true,
    },

    // Layout-inställningar
    {
      name: 'layout',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'contentAlignment',
          type: 'select',
          label: 'Content Alignment',
          defaultValue: 'left',
          options: [
            { label: 'Vänster', value: 'tleft' },
            { label: 'Centrerad', value: 'center' },
            { label: 'Höger', value: 'right' },
          ],
        },
        {
          name: 'height',
          type: 'select',
          label: 'Banner Height',
          defaultValue: 'medium',
          options: [
            { label: 'Liten (400px)', value: 'small' },
            { label: 'Medium (500px)', value: 'medium' },
            { label: 'Stor (600px)', value: 'large' },
            { label: 'Extra stor (700px)', value: 'xlarge' },
          ],
        },
        {
          name: 'overlayIntensity',
          type: 'select',
          label: 'Overlay Darkness',
          defaultValue: 'medium',
          options: [
            { label: 'Ljus', value: 'light' },
            { label: 'Medium', value: 'medium' },
            { label: 'Mörk', value: 'dark' },
            { label: 'Ingen', value: 'none' },
          ],
        },
      ],
    },

    // Knapp-inställningar
    {
      name: 'button',
      type: 'group',
      label: 'Button Settings',
      fields: [
        {
          name: 'showButton',
          type: 'checkbox',
          label: 'Show Button',
          defaultValue: false,
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          admin: {
            condition: (data, siblingData) => siblingData?.showButton,
          },
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link',
          admin: {
            condition: (data, siblingData) => siblingData?.showButton,
          },
        },
        {
          name: 'buttonStyle',
          type: 'select',
          label: 'Button Style',
          defaultValue: 'primary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.showButton,
          },
        },
        {
          name: 'buttonPosition',
          type: 'select',
          label: 'Button Position',
          defaultValue: 'below',
          options: [
            { label: 'Under text', value: 'below' },
            { label: 'Bredvid text (inline)', value: 'inline' },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.showButton,
          },
        },
      ],
    },
  ],
}
