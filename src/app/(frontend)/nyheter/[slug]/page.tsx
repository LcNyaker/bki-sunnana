import { getPayload } from 'payload'
import config from '@payload-config'
import type { News } from '@/payload-types'
import NewsArticle from '@/app/components/news/NewsArticle'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

const NewsPage = async ({ params }: PageProps) => {
  const { slug } = await params
  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'news',
    where: {
      slug: { equals: slug },
      published: { equals: true },
    },
    limit: 1,
    depth: 3,
  })

  const news = res.docs[0] as News | undefined

  console.log('Fetched news article:', news)

  if (!news) {
    notFound()
  }

  return <NewsArticle news={news} />
}

export default NewsPage
