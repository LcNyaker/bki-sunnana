import type { Media } from '../payload-types'

// Definiera typer för varje block baserat på Payload-config
export interface HeroBlockType {
  blockType: 'hero'
  title?: string | null
  body?: string | null
  id?: string | null
  blockName?: string | null
  image?: Media | null
}

export interface BannerBlockType {
  blockType: 'banner'
  title?: string | null
  body?: string | null
  id?: string | null
  blockName?: string | null
  image?: Media | null
}

export interface GuideBlockType {
  blockType: 'guide'
  id: string
  title: string
  image?: Media
  createdAt: string
  author: string
}

export interface ListBlockType {
  blockType: 'list-block'
  id?: string
  blockName?: string | null
  title?: string
  limit?: number
}

export type TestBlockType = {
  blockType: 'test'
  id?: string
  title: string
  body?: string
  image: {
    url: string
    alt?: string
  }
  layout?: {
    contentAlignment: 'left' | 'center' | 'right'
    height: 'small' | 'medium' | 'large' | 'xlarge'
    overlayIntensity: 'light' | 'medium' | 'dark' | 'none'
  }
  button?: {
    showButton: boolean
    buttonText?: string
    buttonLink?: string
    buttonStyle?: 'primary' | 'secondary' | 'outline'
    buttonPosition?: 'below' | 'inline'
  }
}
// Bas-interface för okända block-typer
export interface UnknownBlockType {
  blockType: Exclude<string, 'hero' | 'post-list' | 'guide' | 'banner'>
  id?: string | null
  blockName?: string | null
}

// Union type av alla blocks (lägg till fler när du skapar dem)
export type BlockType =
  | HeroBlockType
  | GuideBlockType
  | ListBlockType
  | BannerBlockType
  | TestBlockType

// Utökad type som hanterar alla block från Payload
export type PayloadBlockType = BlockType | UnknownBlockType

// Page type
export interface PageType {
  title: string
  layout: PayloadBlockType[]
}
