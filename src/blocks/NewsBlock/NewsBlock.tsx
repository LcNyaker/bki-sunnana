import Image from 'next/image'
import NewsIntro from './NewsIntro'
import { NewsBlockType } from '@/types/blocks'

type NewsBlockProps = NewsBlockType

export const NewsBlock = ({ title, undertitle, body, image, link }: NewsBlockProps) => {
  const mappedLink = (() => {
    if (!link?.text) return undefined

    let url: string | null | undefined

    if (link.linkType === 'external') {
      url = link.external
    } else if (link.linkType === 'internal' && link.internal) {
      // Hantera både när value är ett objekt och när det är en sträng
      const internalValue = link.internal.value

      if (typeof internalValue === 'string') {
        // Om det bara är ett ID (inte populerat)
        console.warn('Internal link not populated:', internalValue)
        return undefined
      } else if (internalValue?.slug) {
        // Om det är ett populerat objekt med slug
        url = `/${internalValue.slug}`
      }
    }

    return url ? { url, text: link.text } : undefined
  })()

  const ImageComponent = () => {
    if (!image?.url) {
      return null
    }

    return (
      <div className="flex justify-center items-center p-6">
        <figure className="relative w-full h-full min-h-[240px]">
          <Image
            src={image.url}
            alt={image.alt || `Bild kopplat till nyhet om ${title}`}
            fill
            className="object-cover object-top rounded-md"
            loading="eager"
          />
        </figure>
      </div>
    )
  }

  if (!image?.url) {
    return (
      <div className="xxl:mx-auto">
        <NewsIntro
          title={title ?? undefined}
          undertitle={undertitle ?? undefined}
          bodyText={body ?? undefined}
          link={mappedLink}
        />
      </div>
    )
  }

  return (
    <section className="section-wrapper">
      <div className="grid border-2 rounded-md shadow-lg shadow-black/40 grid-cols-2 items-stretch mb-10">
        <ImageComponent />
        <NewsIntro
          title={title ?? undefined}
          undertitle={undertitle ?? undefined}
          bodyText={body ?? undefined}
          link={mappedLink}
        />
      </div>
    </section>
  )
}
