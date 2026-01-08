import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    //Labels styr nmanet på collections visas i adminpanel
    singular: 'post', // detta styr namnet i enskild post "Creating new post"
    plural: 'Posts', // detta styr namnet i sidebaren under collection
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
      name: 'body', // själva innehållet i posten
      type: 'richText', // "richText" gör att användaren kan formatera text (fetstil, länkar, rubriker m.m.)
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
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'author', // hur man får denna att visas i UI.
      type: 'text',
    },
  ],
}
