import type { CollectionConfig } from 'payload'
import { HeroConfig } from '../blocks/HeroBlock/config'
import { BannerConfig } from '@/blocks/BannerBlock/config'
import { SponsorBlockConfig } from '@/blocks/CarousalBlock/config'
import { ImageTextBlockConfig } from '@/blocks/ImageTextBlock/config'
import { NewsBlockConfig } from '@/blocks/NewsBlock/config'
import { VolunteersConfig } from '@/blocks/VolunteerBlock/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug (t.ex. "home", "about")',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroConfig,
        BannerConfig,
        SponsorBlockConfig,
        ImageTextBlockConfig,
        NewsBlockConfig,
        VolunteersConfig,
      ],
    },
  ],
}
