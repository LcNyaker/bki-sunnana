import { HeroBlock } from '../../blocks/HeroBlock/HeroBlock'
import type {
  PayloadBlockType,
  HeroBlockType,
  GuideBlockType,
  ListBlockType,
  BannerBlockType,
  TestBlockType,
} from '@/types/blocks'
import { ListBlock } from '@/blocks/ListBlock/ListBlock'
import { GuideBlock } from '@/blocks/GuideBlock.tsx/GuideBlock'
import { BannerBlock } from '@/blocks/BannerBlock/BannerBlock'
import { TestBlock } from '@/blocks/TestBlock/TestBlock'
import { JSX } from 'react'

interface RenderBlocksProps {
  layout: PayloadBlockType[]
}
const blockRender = (block: PayloadBlockType, index: number): JSX.Element | null => {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock key={block.id || index} {...(block as HeroBlockType)} />

    case 'guide':
      return <GuideBlock key={block.id || index} {...(block as GuideBlockType)} />

    case 'list-block':
      return <ListBlock key={block.id || index} {...(block as ListBlockType)} />

    case 'banner':
      return <BannerBlock key={block.id || index} {...(block as BannerBlockType)} />

    case 'test':
      return <TestBlock key={block.id || index} {...(block as TestBlockType)} />

    default:
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Unknown block type: ${block.blockType}`)
      }
      return null
  }
}

export const RenderBlocks = ({ layout }: RenderBlocksProps) => {
  return <div id="hejhej">{layout.map((block, i) => blockRender(block, i))}</div>
}
