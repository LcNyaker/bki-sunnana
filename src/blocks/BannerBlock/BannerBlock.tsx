import clsx from 'clsx'
import type { BannerBlockType } from '@/types/blocks'
import Image from 'next/image'

export const BannerBlock = ({ title, body, image, fullwidth = false }: BannerBlockType) => {
  return (
    <section
      className={clsx('bg-secondary-500 , text-black p-10', !fullwidth && 'section-wrapper')}
    >
      {title && <h2>{title}</h2>}
      {body && <p>{body}</p>}
      {image?.url && (
        <div className="relative w-full h-[400px]">
          <Image
            src={image.url}
            alt={image.alt || title || 'Banner image'}
            fill
            className="object-cover"
          />
        </div>
      )}
    </section>
  )
}
