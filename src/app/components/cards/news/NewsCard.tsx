import Image from 'next/image'
import NewsIntro from './NewsIntro'
import type { News, Media } from '@/payload-types'

type NewsCardProps = {
  news: News
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const image = typeof news.image === 'object' ? (news.image as Media) : null

  const link = {
    url: `/nyheter/${news.slug}`,
  }

  const ImageComponent = () => {
    if (!image?.url) return null

    return (
      <div className="flex justify-center items-center p-6">
        <figure className="relative w-full h-full min-h-[240px]">
          <Image
            src={image.url}
            alt={image.alt || `Bild kopplat till nyhet om ${news.title}`}
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
          title={news.title}
          undertitle={news.subtitle ?? undefined}
          bodyText={news.intro ?? undefined}
          link={link}
          buttonText={news.buttonText ?? undefined}
        />
      </div>
    )
  }

  return (
    <section>
      <div className="grid grid-cols-2 items-stretch border-2 rounded-md shadow-lg shadow-black/40">
        <ImageComponent />
        <NewsIntro
          title={news.title}
          undertitle={news.subtitle ?? undefined}
          bodyText={news.intro ?? undefined}
          link={link}
          buttonText={news.buttonText ?? undefined}
        />
      </div>
    </section>
  )
}

export default NewsCard
