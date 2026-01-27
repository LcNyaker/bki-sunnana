'use client'

import VolunteerCard from './VolunteerCard'
import type { Person } from '@/payload-types'

type Props = {
  people: Person[]
}

const VolunteerCardsClient = ({ people }: Props) => {
  if (!people.length) return null

  return (
    <section className="w-full section-wrapper flex flex-col items-center gap-12 mt-10">
      <div className="w-full ">
        <div className="pb-4 mb-10">
          <h1 className="text-center text-4xl ">Människorna bakom klubben</h1>
          <p className="mt-4 text-center max-w-3xl mx-auto text-gray-700">
            Här hittar du oss som jobbar ideellt med att driva föreningen framåt. Från styrelserum
            till matchdag – vi bidrar på olika sätt, med samma mål: att skapa en trygg, levande och
            engagerande klubb för alla.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {people.map((person) => (
            <VolunteerCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VolunteerCardsClient
