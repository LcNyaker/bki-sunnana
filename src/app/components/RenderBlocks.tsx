import { HeroBlock } from '../../blocks/HeroBlock/HeroBlock'
import type {
  PayloadBlockType,
  HeroBlockType,
  SponsorBlockType,
  ListBlockType,
  BannerBlockType,
  ImageTextBlockType,
  NewsBlockType,
} from '@/types/blocks'
import { ListBlock } from '@/blocks/ListBlock/ListBlock'
import { BannerBlock } from '@/blocks/BannerBlock/BannerBlock'
import { JSX } from 'react'
import { SponsorBlock } from '@/blocks/Carousel/SponsorBlock'
import { ImageTextBlock } from '@/blocks/ImageTextBlock/ImageTextBlock'
import { NewsBlock } from '@/blocks/NewsBlock/NewsBlock'

interface RenderBlocksProps {
  layout: PayloadBlockType[]
}
const blockRender = (block: PayloadBlockType, index: number): JSX.Element | null => {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock key={block.id || index} {...(block as HeroBlockType)} />

    case 'sponsors':
      return <SponsorBlock key={block.id || index} {...(block as SponsorBlockType)} />

    case 'list-block':
      return <ListBlock key={block.id || index} {...(block as ListBlockType)} />

    case 'banner':
      return <BannerBlock key={block.id || index} {...(block as BannerBlockType)} />

    case 'imageTextBlock':
      return <ImageTextBlock key={block.id || index} {...(block as ImageTextBlockType)} />

    case 'newsBlock':
      return <NewsBlock key={block.id || index} {...(block as NewsBlockType)} />

    default:
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Unknown block type: ${block.blockType}`)
      }
      return null
  }
}

export const RenderBlocks = ({ layout }: RenderBlocksProps) => {
  return <div>{layout.map((block, i) => blockRender(block, i))}</div>
}
