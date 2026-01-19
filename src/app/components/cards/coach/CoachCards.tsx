import { getPayload } from 'payload'
import config from '@payload-config'
import CoachCardsClient from './CoachCardsClient'

const CoachCards = async () => {
  const payload = await getPayload({ config })

  const coachesRes = await payload.find({
    collection: 'coaches',
    limit: 5,
    depth: 2,
    sort: 'id',
  })

  return <CoachCardsClient coaches={coachesRes.docs} />
}

export default CoachCards
