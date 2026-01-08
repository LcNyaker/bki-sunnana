import type { CollectionConfig } from 'payload'

export const Employees: CollectionConfig = {
  slug: 'employees',
  labels: {
    //Labels styr nmanet på collections visas i adminpanel
    singular: 'Employee',
    plural: 'Employees', // detta styr namnet i enskild post "Creating new post"
  },
  admin: {
    useAsTitle: 'forname', // Detta skapar en dynamisk title till varje post som renderar om live (title hämtar från fields-> title).
  },
  access: {
    read: () => true, // låter alla (även icke-inloggade) läsa data
  },
  fields: [
    {
      name: 'forname', // Beskrivelse på textfältet
      type: 'text', // Text-input
      required: true, // Gör att textfältet måste fyllas i
    },
    {
      name: 'lastname', // Beskrivelse på textfältet
      type: 'text', // Text-input
      required: true, // Gör att textfältet måste fyllas i
    },
    {
      name: 'position', // Beskrivelse på textfältet
      type: 'text', // Text-input
      required: true, // Gör att textfältet måste fyllas i
    },
    {
      name: 'introduktion', // själva innehållet i posten
      type: 'text',
      required: true, // Gör att textfältet måste fyllas i
    },
    {
      name: 'email', // själva innehållet i posten
      type: 'text', // "richText" gör att användaren kan formatera text (fetstil, länkar, rubriker m.m.)
    },
    {
      name: 'image', // fält för en bild
      type: 'upload', // "upload" betyder att man kan ladda upp filer eller välja från media-biblioteket
      relationTo: 'media', // anger vilken collection som filerna ska hämtas från (kräver en "media"-collection) (meida ligger i media.ts slug)
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      required: true,
    },
  ],
}
