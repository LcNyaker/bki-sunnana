import { getPayload } from 'payload'
import config from '@payload-config'
import TeamDisplayClient from './TeamDisplayClient'

const TeamDisplay = async () => {
  const payload = await getPayload({ config })

  const lineupRes = await payload.find({
    collection: 'team-lineups',
    limit: 1,
    depth: 4,
  })

  const lineup = lineupRes.docs[0]

  if (!lineup) return null

  return <TeamDisplayClient lineup={lineup} />
}

export default TeamDisplay
