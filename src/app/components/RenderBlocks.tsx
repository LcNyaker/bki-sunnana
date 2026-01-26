import { HeroBlock } from '../../blocks/HeroBlock/HeroBlock'
import type {
  PayloadBlockType,
  HeroBlockType,
  SponsorBlockType,
  BannerBlockType,
  ImageTextBlockType,
  NewsBlockType,
} from '@/types/blocks'
import { BannerBlock } from '@/blocks/BannerBlock/BannerBlock'
import { JSX } from 'react'
import { SponsorBlock } from '@/blocks/Carousel/SponsorBlock'
import { ImageTextBlock } from '@/blocks/ImageTextBlock/ImageTextBlock'
import { NewsBlock } from '@/blocks/NewsBlock/NewsBlock'
import { VolunteersBlock } from '@/blocks/VolunteerBlock/VolunteerBlock'

interface RenderBlocksProps {
  layout: PayloadBlockType[]
}
const blockRender = (block: PayloadBlockType, index: number): JSX.Element | null => {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock key={block.id || index} {...(block as HeroBlockType)} />

    case 'sponsors':
      return <SponsorBlock key={block.id || index} {...(block as SponsorBlockType)} />

    case 'banner':
      return <BannerBlock key={block.id || index} {...(block as BannerBlockType)} />

    case 'imageTextBlock':
      return <ImageTextBlock key={block.id || index} {...(block as ImageTextBlockType)} />

    case 'newsBlock':
      return <NewsBlock key={block.id || index} {...(block as NewsBlockType)} />

    case 'volunteers':
      return <VolunteersBlock key={block.id || index} />

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
