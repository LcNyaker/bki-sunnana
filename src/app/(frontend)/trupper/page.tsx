export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'

import TeamDisplay from '@/app/components/displays/teams/TeamDisplay'
import TeamsList from '@/app/components/lists/TeamsList'

const TeamsPage = async () => {
  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'teams',
    limit: 1,
    depth: 1,
  })

  console.log(res)
  return (
    <main className="section-wrapper mt-10">
      <h1 className="text-3xl font-bold mb-4 title-accent">Trupper</h1>

      <div className="grid gap-6">
        {res.docs.map((team) => (
          <div key={team.id}>
            <TeamDisplay />
            <TeamsList />
          </div>
        ))}
      </div>
    </main>
  )
}

export default TeamsPage
