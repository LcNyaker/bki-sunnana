'use client'

import type { Player } from '@/payload-types'
import PlayerCard from './PlayerCard'

type Props = {
  players: Player[]
}

const PlayerCardsClient = ({ players }: Props) => {
  const goalies = players.filter((p) => p.position === 'goalie')
  const backs = players.filter((p) => p.position === 'back')
  const centers = players.filter((p) => p.position === 'center')
  const forwards = players.filter((p) => p.position === 'forward')

  const renderSection = (title: string, list: Player[]) => {
    if (list.length === 0) return null

    return (
      <div className="w-full">
        <h2 className="text-center text-4xl border-b-2 pb-4 mx-20">{title}</h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
          {list.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="w-full section-wrapper flex flex-col items-center gap-16 mt-10">
      {renderSection('Målvakter', goalies)}
      {renderSection('Backar', backs)}
      {renderSection('Centrar', centers)}
      {renderSection('Forwards', forwards)}
    </section>
  )
}

export default PlayerCardsClient
