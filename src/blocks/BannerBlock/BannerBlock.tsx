import clsx from 'clsx'
import type { BannerBlockType } from '@/types/blocks'

export const BannerBlock = ({ title, fullwidth }: BannerBlockType) => {
  return (
    <section
      className={clsx('bg-secondary-500 , text-black p-10 my-10', !fullwidth && 'section-wrapper')}
    >
      <article className="flex justify-center items-center">
        {title && <h2 className="text-xl font-bold">{title}</h2>}
      </article>
    </section>
  )
}
