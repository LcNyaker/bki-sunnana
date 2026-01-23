import { RenderBlocks } from '@/app/components/RenderBlocks'
import MatchesWrapper from '@/app/components/wrappers/MatchesWrapper'
import { getPageBySlug } from '@/lib/getPageBySlug'
import VolunteersList from '@/app/components/lists/VolunteersList'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    return <div>404</div>
  }

  const isMatchesPage = slug === 'matcher'
  const isAbouttPage = slug === 'om-oss'

  const isCMSPage = !isMatchesPage

  return (
    <main>
      {isMatchesPage && <MatchesWrapper />}
      {isAbouttPage && <VolunteersList />}

      {isCMSPage && page.layout && page.layout.length > 0 && <RenderBlocks layout={page.layout} />}
    </main>
  )
}
