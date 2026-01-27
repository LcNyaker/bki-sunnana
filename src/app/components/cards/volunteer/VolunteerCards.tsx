import { getPayload } from 'payload'
import config from '@payload-config'
import VolunteerCardsClient from './VolunteerCardsClient'

const VolunteerCards = async () => {
  const payload = await getPayload({ config })

  const peopleRes = await payload.find({
    collection: 'people',
    where: {
      published: {
        equals: true,
      },
    },
    depth: 2,
    sort: 'role',
  })

  return <VolunteerCardsClient people={peopleRes.docs} />
}

export default VolunteerCards
