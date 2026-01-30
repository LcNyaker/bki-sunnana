import clsx from 'clsx'
import Image from 'next/image'
import TextContent from './TextContent'
import { ImageTextBlockType } from '@/types/blocks'

type ImageTextBlockProps = ImageTextBlockType

export const ImageTextBlock = ({
  title,
  undertitle,
  body,
  image,
  link,
  fullwidth,
  imageLeft,
  backgroundColor,
  textColor,
}: ImageTextBlockProps) => {
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
        url = `/information/${internalValue.slug}`
      }
    }

    return url ? { url, text: link.text } : undefined
  })()

  const bgClass = backgroundColor ? `bg-${backgroundColor}` : 'bg-white'

  const textClass = textColor ? `text-${textColor}` : 'text-black'

  const ImageComponent = () => {
    if (!image?.url) {
      return null
    }

    return (
      <Image
        src={image.url}
        alt={image.alt || ''}
        width={image.width ?? 1500}
        height={image.height ?? 1000}
        loading="lazy"
        className={clsx('h-full w-full object-cover', {
          'section-wrapper-left': !fullwidth && imageLeft,
          'section-wrapper-right': !fullwidth && !imageLeft,
        })}
      />
    )
  }

  if (!image?.url) {
    return (
      <div className={clsx('xxl:mx-auto', bgClass)}>
        <TextContent
          title={title ?? undefined}
          undertitle={undertitle ?? undefined}
          bodyText={body ?? undefined}
          link={mappedLink}
          textClass={textClass}
        />
      </div>
    )
  }

  return (
    <div className={clsx('grid grid-cols-1 md:grid-cols-2 xxl:mx-auto', bgClass)}>
      {imageLeft ? (
        <>
          <ImageComponent />
          <TextContent
            title={title ?? undefined}
            undertitle={undertitle ?? undefined}
            bodyText={body ?? undefined}
            link={mappedLink}
            textClass={textClass}
            imageLeft={imageLeft}
          />
        </>
      ) : (
        <>
          <TextContent
            title={title ?? undefined}
            undertitle={undertitle ?? undefined}
            bodyText={body ?? undefined}
            link={mappedLink}
            textClass={textClass}
            imageLeft={imageLeft}
          />
          <ImageComponent />
        </>
      )}
    </div>
  )
}
