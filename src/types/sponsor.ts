import type { Media } from '@/payload-types'

export interface Sponsor {
  id: string
  name: string
  website: string
  logo?: string | Media | null
}
