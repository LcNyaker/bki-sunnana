export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { getPageBySlug } from '@/lib/getPageBySlug'
import Breadcrumbs from '@/app/components/fixtures/header/Breadcrumbs'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import TeamDisplay from '@/app/components/displays/teams/TeamDisplay'
import TeamsList from '@/app/components/lists/TeamsList'

const TeamsPage = async () => {
  const payload = await getPayload({ config })
  const page = await getPageBySlug('trupper')

  const res = await payload.find({
    collection: 'teams',
    limit: 1,
    depth: 1,
  })

  return (
    <main>
      {page?.breadcrumbs && <Breadcrumbs breadcrumbs={page.breadcrumbs} />}
      {page?.layout && page.layout.length > 0 && (
        <div className="section-wrapper">
          <RenderBlocks layout={page.layout} />
        </div>
      )}
      {(!page?.layout || page.layout.length === 0) && (
        <div className="section-wrapper mt-10">
          <h1 className="text-3xl font-bold mb-4 title-accent">Trupper</h1>
        </div>
      )}
      <div className="section-wrapper mt-10">
        <div className="grid gap-6">
          {res.docs.map((team) => (
            <div key={team.id}>
              <TeamDisplay />
              <TeamsList />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default TeamsPage
