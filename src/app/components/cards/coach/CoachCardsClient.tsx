'use client'

import CoachCard from './CoachCard'
import type { Coach } from '@/payload-types'

type CardProps = {
  coaches: Coach[]
}

const CoachCardsClient = ({ coaches }: CardProps) => {
  if (!coaches.length) return null

  return (
    <section className="w-full section-wrapper flex flex-col items-center gap-12 mt-10">
      <div className="w-full">
        <h2 className="text-center text-4xl border-b-2 mx-20 pb-4 mb-10">Tränare</h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoachCardsClient
