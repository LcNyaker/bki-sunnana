'use client'

import Image from 'next/image'
import HotspotButton from '../../buttons/HotspotButton'
import type { Media, Player } from '@/payload-types'
import { useState } from 'react'
import { PenguinIcon } from '@/app/assets/Icons/PenguinIcon'

type TeamDisplayClientProps = {
  lineup: {
    team:
      | string
      | {
          name: string
        }
    season: string
    image: string | Media
    hotspots?:
      | {
          id?: string | null
          x: number
          y: number
          player: string | Player
        }[]
      | null
  }
}

const TeamDisplayClient = ({ lineup }: TeamDisplayClientProps) => {
  const [activePlayer, setActivePlayer] = useState<Player | null>(null)

  if (typeof lineup.image === 'string') return null
  if (!lineup.image.url) return null
  if (!lineup.hotspots) return null

  return (
    <>
      <section className="grid gap-4 grid-cols-1 2xl:grid-cols-6 2xl:h-[560px]">
        <div
          className=" relative
          col-span-1
          aspect-[16/9]
          2xl:aspect-auto
          2xl:h-full
          2xl:col-span-4
          shadow-lg shadow-black/40
          "
          onMouseLeave={() => setActivePlayer(null)}
        >
          <Image
            src={lineup.image.url}
            alt={lineup.image.alt ?? 'Lagbild'}
            fill
            className="object-cover rounded-md"
            priority
          />

          {lineup.hotspots.map((spot) => {
            if (typeof spot.player === 'string') return null
            const player = spot.player

            return (
              <div key={spot.id} className="hidden 2xl:block">
                <HotspotButton x={spot.x} y={spot.y} onHover={() => setActivePlayer(player)} />
              </div>
            )
          })}
        </div>

        <div className="lg:col-span-2 relative overflow-hidden shadow-lg shadow-black/40">
          {!activePlayer && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-200 hidden 2xl:block rounded-md">
              <div className="flex flex-col h-full gap-8 justify-center items-center">
                <div>
                  {typeof lineup.team !== 'string' && (
                    <h3 className="text-xl">{lineup.team.name}</h3>
                  )}
                  <p>{lineup.season}</p>
                </div>
                <PenguinIcon size={300} />
              </div>
            </div>
          )}
          {activePlayer &&
            typeof activePlayer.images?.portrait === 'object' &&
            activePlayer.images.portrait?.url && (
              <Image
                src={activePlayer.images.portrait.url}
                alt={activePlayer.images.portrait.alt}
                fill
                className="object-cover object-top rounded-md"
                loading="eager"
              />
            )}
        </div>
      </section>
    </>
  )
}

export default TeamDisplayClient
