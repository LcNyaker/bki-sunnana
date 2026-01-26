// app/(frontend)/matcher/page.tsx (eller i din [slug]/page.tsx)
export const dynamic = 'force-dynamic'

import { getPageBySlug } from '@/lib/getPageBySlug'
import Breadcrumbs from '@/app/components/fixtures/header/Breadcrumbs'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import MatchesWrapper from '@/app/components/wrappers/MatchesWrapper'

const MatchesPage = async () => {
  const page = await getPageBySlug('matcher')

  return (
    <main>
      {page?.breadcrumbs && <Breadcrumbs breadcrumbs={page.breadcrumbs} />}
      {page?.layout && page.layout.length > 0 && (
        <div className="section-wrapper">
          <RenderBlocks layout={page.layout} />
        </div>
      )}
      <MatchesWrapper />
    </main>
  )
}

export default MatchesPage
