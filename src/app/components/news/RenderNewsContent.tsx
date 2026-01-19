import Image from 'next/image'
import type { Media, News } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

type ContentProps = {
  content: News['content']
}

const NewsContentRenderer = ({ content }: ContentProps) => {
  return (
    <>
      {content.map((block, index) => {
        switch (block.blockType) {
          case 'textBlock':
            return (
              <section key={index} className="mb-8">
                {block.subtitle && <h2 className="text-xl font-semibold mb-2">{block.subtitle}</h2>}

                <div>
                  <RichText data={block.text} />
                </div>
              </section>
            )

          case 'imageBlock': {
            const image = typeof block.image === 'object' ? (block.image as Media) : null

            if (!image?.url) return null

            return (
              <figure key={block.id ?? index} className="my-10">
                <div className="relative">
                  <Image
                    src={image.url}
                    alt={image.alt || 'bild kopplad till nyhetsinnehåll'}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                {block.caption && (
                  <figcaption className="mt-2 text-sm text-neutral-500">{block.caption}</figcaption>
                )}
              </figure>
            )
          }
          default:
            return null
        }
      })}
    </>
  )
}

export default NewsContentRenderer
