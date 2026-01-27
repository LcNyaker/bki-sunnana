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
      <main className="section-wrapper mt-10">
        <h1 className="text-3xl font-bold mb-8">Nyheter</h1>

        <div className="grid gap-6">
          {newsRes.docs.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </main>
    </>
  )
}

export default NewsPage
