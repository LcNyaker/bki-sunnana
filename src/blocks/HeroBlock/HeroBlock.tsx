import Image from 'next/image'
import type { HeroBlockType } from '../../types/blocks'

export const HeroBlock = ({ title, body, image }: HeroBlockType) => {
  return (
    <section className="relative h-[70vh] max-h-[720px] min-h-[480px] w-full overflow-hidden">
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || title || 'Hero image'}
          fill
          priority
          className="object-cover scale-105 brightness-90"
        />
      )}
      <div className="relative z-5 h-full section-wrapper flex flex-col  items-center lg:items-start justify-center">
        {title && (
          <h1
            className="
            text-4xl md:text-6xl font-extrabold
            bg-gradient-to-r to-primary-200 from-primary-500 bg-clip-text text-transparent
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
            [text-shadow:0_0_30px_rgba(255,180,0,0.35)]
            "
          >
            {title}
          </h1>
        )}

        {body && (
          <p
            className="
            mt-6 text-lg md:text-2xl
            text-white
            leading-relaxed
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
            [text-shadow:
            0_1px_2px_rgba(0,0,0,0.8),
            0_0_12px_rgba(0,0,0,0.4)
            ]
            "
          >
            {body}
          </p>
        )}
      </div>
    </section>
  )
}
