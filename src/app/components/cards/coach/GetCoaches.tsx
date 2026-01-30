import { getPayload } from 'payload'
import config from '@payload-config'
import CoachCardsList from '../../lists/CoachCardsList'

const CoachCards = async () => {
  const payload = await getPayload({ config })

  const coachesRes = await payload.find({
    collection: 'coaches',
    limit: 5,
    depth: 2,
    sort: 'id',
  })

  return <CoachCardsList coaches={coachesRes.docs} />
}

export default CoachCards
