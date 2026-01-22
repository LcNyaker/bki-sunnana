export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import PlayerDisplay from '@/app/components/displays/player/PlayerDisplay'

type PageProps = {
  params: {
    slug: string
  }
}

const PlayerPage = async ({ params }: PageProps) => {
  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'players',
    where: {
      slug: {
        equals: params.slug,
      },
    },
    depth: 2,
    limit: 1,
  })

  const player = res.docs[0]
  console.log(player)
  if (!player) {
    notFound()
  }

  return <PlayerDisplay player={player} />
}

export default PlayerPage
