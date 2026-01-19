import { getPayload } from 'payload'
import config from '@payload-config'

import NextMatchDisplay from '../displays/matches/NextMatchDisplay'
import SeriesTable from './SeriesTable'

const StandingTable = async () => {
  const payload = await getPayload({ config })

  const upcomingMatchesRes = await payload.find({
    collection: 'matches',
    where: {
      isFinished: {
        equals: false,
      },
    },
    sort: 'date',
    depth: 2,
  })

  const upcomingMatches = upcomingMatchesRes.docs
  const nextMatch = upcomingMatches[0]
  const futureMatches = upcomingMatches.slice(1)

  if (!nextMatch || typeof nextMatch.team === 'string' || typeof nextMatch.opponent === 'string') {
    return <p>Ingen kommande match</p>
  }

  return (
    <>
      <section className="w-full grid grid-cols-1 items-stretch lg:grid-cols-5 gap-10 section-wrapper lg:gap-6 mt-10">
        <div className="lg:col-span-3 flex flex-col">
          <h2 className="title-accent text-xl font-bold py-1">Nästa match</h2>
          <NextMatchDisplay nextMatch={nextMatch} />
        </div>
        <div className="lg:col-span-2 flex flex-col h-full">
          <h2 className="text-xl title-accent font-bold py-1">Tabell</h2>
          <SeriesTable />
        </div>
      </section>

      <section className="w-full section-wrapper mt-20">
        <h3 className="title-accent text-xl font-bold py-1">Kommande matcher</h3>

        <section>
          <p className="text-lg p-2 font-semibold">Datum</p>
          {futureMatches.map((match) => {
            if (typeof match.team === 'string' || typeof match.opponent === 'string') {
              return null
            }

            const shortDate = new Date(match.date).toLocaleDateString('sv-SE', {
              day: 'numeric',
              month: 'numeric',
            })
            return (
              <div
                key={match.id}
                className="mb-4 border-2 shadow-md shadow-black/40 overflow-hidden"
              >
                <div className="grid grid-cols-[2fr_8fr] items-center gap-4 py-4 px-4">
                  <div className="flex justify-between">
                    <p className="font-semibold text-center">{shortDate}</p>
                    <p>Omgång {match.round}</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                    <span className="text-right">
                      {match.isHomeGame ? match.team.name : match.opponent.name}
                    </span>
                    <span className="font-semibold">–</span>
                    <span className="text-left">
                      {match.isHomeGame ? match.opponent.name : match.team.name}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default StandingTable
