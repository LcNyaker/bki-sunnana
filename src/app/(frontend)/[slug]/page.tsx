import { RenderBlocks } from '@/app/components/RenderBlocks'
import { getPageBySlug } from '@/lib/getPageBySlug'
import Breadcrumbs from '@/app/components/fixtures/header/Breadcrumbs'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return (
    <main>
      <Breadcrumbs breadcrumbs={page?.breadcrumbs} />
      {page.layout && page.layout.length > 0 && <RenderBlocks layout={page.layout} />}
    </main>
  )
}
