// app/(frontend)/matcher/page.tsx (eller i din [slug]/page.tsx)
export const dynamic = 'force-dynamic'

import { getPageBySlug } from '@/lib/getPageBySlug'
import Breadcrumbs from '@/app/components/fixtures/header/Breadcrumbs'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import MatchesWrapper from '@/app/components/wrappers/MatchesWrapper'
import { notFound } from 'next/navigation'

const MatchesPage = async () => {
  const page = await getPageBySlug('matcher')

  if (!page) {
    return notFound()
  }

  return (
    <main>
      <section className="mt-10 md:mt-8">
        {page?.breadcrumbs && <Breadcrumbs breadcrumbs={page.breadcrumbs} />}
        {page?.layout && page.layout.length > 0 && (
          <div className="section-wrapper">
            <RenderBlocks layout={page.layout} />
          </div>
        )}
        <div className="section-wrapper">
          <div className="mb-8">
            <h1 className="title-accent sm:col-span-2">{page.title}</h1>
          </div>
          <MatchesWrapper />
        </div>
      </section>
    </main>
  )
}

export default MatchesPage
