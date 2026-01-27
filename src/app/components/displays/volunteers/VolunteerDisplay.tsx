import { getPayload } from 'payload'
import config from '@payload-config'

const VolunteerDisplay = async () => {
  const payload = await getPayload({ config })

  const volunteersRes = await payload.find({
    collection: 'people',
    limit: 1,
    depth: 2,
  })

  const volunteers = volunteersRes.docs[0]

  if (!volunteers) return null
}

export default VolunteerDisplay
