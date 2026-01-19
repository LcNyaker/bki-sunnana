import TeamDisplay from '@/app/components/displays/teams/TeamDisplay'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import StandingTable from '@/app/components/tables/StandingTable'
import { getPageBySlug } from '@/app/lib/getPageBySlug'
import TeamsList from '@/app/components/lists/TeamsList'
import VolunteersList from '@/app/components/lists/VolunteersList'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    return <div>404</div>
  }

  const isMatchesPage = slug === 'matcher'
  const isTeamsPage = slug === 'trupper'
  const isAbouttPage = slug === 'om-oss'

  const isCMSPage = !isMatchesPage && !isTeamsPage

  return (
    <main>
      {isMatchesPage && <StandingTable />}
      {isTeamsPage && (
        <>
          <TeamDisplay />
          <TeamsList />
        </>
      )}
      {isAbouttPage && <VolunteersList />}

      {isCMSPage && page.layout && page.layout.length > 0 && <RenderBlocks layout={page.layout} />}
    </main>
  )
}
