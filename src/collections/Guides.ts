import type { CollectionConfig } from 'payload'

export const Guides: CollectionConfig = {
  slug: 'guides',
  labels: {
    //Labels styr nmanet på collections visas i adminpanel
    singular: 'Guide', // detta styr namnet i enskild guide "Creating new guide"
    plural: 'Guides', // detta styr namnet i sidebaren under collection
  },
  admin: {
    useAsTitle: 'title', // Detta skapar en dynamisk title till varje post som renderar om live (title hämtar från fields-> title).
  },
  access: {
    read: () => true, // låter alla (även icke-inloggade) läsa data
  },
  fields: [
    {
      name: 'title', // Beskrivelse på textfältet
      type: 'text', // Text-input
      required: true, // Gör att textfältet måste fyllas i
    },
    {
      name: 'slug', // används ofta för URL-vänliga versioner av titeln
      type: 'text', // vanlig text
      required: true, // måste fyllas i
      admin: {
        position: 'sidebar', // visar detta fält i sidomenyn i adminpanelen istället för i huvuddelen
      },
    },
    {
      name: 'content',
      type: 'richText',
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
      name: 'published', // skapar ett fält för published
      type: 'checkbox', // Skapar en checkbox för att fylla i ett boolean värde
      label: 'Published?', // label till checkboxen som förklarar vad checkboxen syfte är
      defaultValue: 'false', // start värde på checkboxen
    },
    {
      name: 'image', // fält för en bild
      type: 'upload', // "upload" betyder att man kan ladda upp filer eller välja från media-biblioteket
      relationTo: 'media', // anger vilken collection som filerna ska hämtas från (kräver en "media"-collection) (meida ligger i media.ts slug)
    },
    {
      name: 'author', // hur man får denna att visas i UI.
      type: 'text',
    },
  ],
}
