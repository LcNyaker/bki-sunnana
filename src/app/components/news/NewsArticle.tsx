import Image from 'next/image'
import type { News, Media, Person } from '@/payload-types'
import NewsContentRenderer from './RenderNewsContent'

type NewsProps = {
  news: News
}

const NewsArticle = ({ news }: NewsProps) => {
  const heroImage = typeof news.image === 'object' ? (news.image as Media) : null

  console.log(news.content)
  const authorName = (() => {
    if (news.author?.authorType === 'manual') {
      return news.author.manualName
    }

    if (news.author?.authorType === 'person' && typeof news.author.person === 'object') {
      const person = news.author.person as Person
      return person.fullName ?? `${person.forename} ${person.lastName}`
    }

    return null
  })()

  return (
    <article className="section-wrapper max-w-3xl mt-10 mb-20">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{news.title}</h1>

        <div className="flex justify-between flex-col sm:flex-row">
          {news.subtitle && (
            <p className="mt-2 text-lg uppercase text-neutral-600">{news.subtitle}</p>
          )}

          {authorName && <p className="mt-4 text-sm text-neutral-500">Av {authorName}</p>}
        </div>
      </header>

      {heroImage?.url && (
        <figure className="relative w-full aspect-[16/9] mb-10">
          <Image
            src={heroImage.url}
            alt={heroImage.alt || news.title}
            fill
            className="object-cover rounded-md object-top"
            priority
          />
        </figure>
      )}

      <section>
        <NewsContentRenderer content={news.content} />
      </section>
    </article>
  )
}

export default NewsArticle
