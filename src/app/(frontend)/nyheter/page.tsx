export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import NewsCard from '@/app/components/cards/news/NewsCard'
import Breadcrumbs from '@/app/components/fixtures/header/Breadcrumbs'
import { notFound } from 'next/navigation'

const NewsPage = async () => {
  const payload = await getPayload({ config })

  const newsRes = await payload.find({
    collection: 'news',
    where: {
      published: { equals: true },
    },
    sort: '-createdAt',
    depth: 1,
  })

  if (!newsRes) return notFound()

  return (
    <>
      <Breadcrumbs items={[{ label: 'Nyheter', href: '/nyheter' }]} />
      <main>
        <section className="mt-10 md:mt-8 section-wrapper">
          <div className="mb-8">
            <h1 className="title-accent">Nyheter</h1>
          </div>

          <div className="grid gap-6">
            {newsRes.docs.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default NewsPage
