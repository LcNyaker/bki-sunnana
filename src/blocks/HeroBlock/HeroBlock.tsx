import Image from 'next/image'
import type { HeroBlockType } from '../../types/blocks'

export const HeroBlock = ({ title, body, image }: HeroBlockType) => {
  return (
    <div className="relative">
      <div></div>
      <section
        className="relative flex flex-col items-center justify-center text-center w-full overflow-hidden h-[60vh]
  max-h-[600px]"
      >
        {image?.url && (
          <div className="absolute inset-0 z-5">
            <Image
              src={image.url || ''}
              alt={image.alt || title || 'Hero image'}
              fill
              className="object-cover brightness-75 saturate-125"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        <div className="z-6 px-6 text-amber-400">
          {title && (
            <h1 className="font-extrabold drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">{title}</h1>
          )}
          {body && (
            <div className="flex justify-end text-center lg:text-end">
              <p className="text-xl mt-6 max-w-2xl mx-auto lg:mr-0 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                {body}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
