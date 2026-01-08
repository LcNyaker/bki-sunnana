import type { CollectionConfig } from 'payload'
import { HeroConfig } from '../blocks/HeroBlock/config'
import { GuideConfig } from '@/blocks/GuideBlock.tsx/config'
import { ListConfig } from '@/blocks/ListBlock/config'
import { BannerConfig } from '@/blocks/BannerBlock/config'
import { TestConfig } from '@/blocks/TestBlock/config'

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
      blocks: [HeroConfig, GuideConfig, ListConfig, BannerConfig, TestConfig],
    },
  ],
}
