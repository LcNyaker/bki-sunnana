import { getPayload } from 'payload'
import config from '@payload-config'
import PlayerCardsClient from './PlayerCardsClient'

const GetPlayers = async () => {
  const payload = await getPayload({ config })

  const playersRes = await payload.find({
    collection: 'players',
    limit: 30,
    sort: 'jerseyNumber',
    depth: 2,
  })

  const players = playersRes.docs

  return <PlayerCardsClient players={players} />
}

export default GetPlayers
