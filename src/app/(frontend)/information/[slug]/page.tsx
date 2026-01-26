import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Info from '@/app/components/info/InfoArticle'
import Breadcrumbs from '@/app/components/fixtures/header/Breadcrumbs'

type PageProps = {
  params: Promise<{ slug: string }>
}

const InfoArticlePage = async ({ params }: PageProps) => {
  const { slug } = await params
  const payload = await getPayload({ config })

  // Hämta artikeln från info-articles collection
  const res = await payload.find({
    collection: 'info-articles',
    where: {
      slug: { equals: slug },
      published: { equals: true },
    },
    limit: 1,
    depth: 3,
  })

  const article = res.docs[0]

  if (!article) {
    notFound()
  }
  console.log(article)
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Information', href: '/information' },
          { label: article.title || 'Artikel' },
        ]}
      />
      <Info info={article} />
    </>
  )
}

export default InfoArticlePage
