import { getPayload } from 'payload'
import config from '@payload-config'
import VolunteerCardsList from '../../lists/VolunteerCardsList'

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

  return <VolunteerCardsList people={peopleRes.docs} />
}

export default VolunteerCards
