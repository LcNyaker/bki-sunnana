import type { InfoArticle } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import BackButton from '../buttons/BackButton'

type ContentProps = {
  content: InfoArticle['content']
}

const InfoContentRenderer = ({ content }: ContentProps) => {
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
        }
      })}
      <BackButton />
    </>
  )
}

export default InfoContentRenderer
