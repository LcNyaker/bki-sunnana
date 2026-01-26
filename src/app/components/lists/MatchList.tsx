import NextMatchDisplay from '../displays/matches/NextMatchDisplay'
import SeriesTable from '../tables/SeriesTable'
import { getUpcomingMatches } from '@/lib/getUpcomingMatches'
import Image from 'next/image'

const UpcomingMatches = async () => {
  const matches = await getUpcomingMatches()

  if (!matches || matches.length === 0) {
    return (
      <div className="section-wrapper mt-10">
        <p className="text-center">Inga kommande matcher</p>
      </div>
    )
  }

  const nextMatch = matches[0]
  const futureMatches = matches.slice(1)

  return (
    <>
      <section className="w-full grid grid-cols-1 items-stretch lg:grid-cols-5 gap-10 section-wrapper lg:gap-6 mt-10">
        <div className="lg:col-span-3 flex flex-col">
          <h2 className="title-accent text-xl font-bold py-1 mb-2">Nästa match</h2>
          {<NextMatchDisplay match={nextMatch} />}
        </div>
        <div className="lg:col-span-2 flex flex-col h-full">
          <h2 className="text-xl title-accent font-bold py-1 mb-2">Tabell</h2>
          <SeriesTable />
        </div>
      </section>

      {futureMatches.length > 0 && (
        <section className="w-full section-wrapper mt-20">
          <h3 className="title-accent text-xl font-bold py-1 mb-4">Kommande matcher</h3>

          <ul>
            {futureMatches.map((match, index) => {
              const matchDate = new Date(match.startDate)
              const shortDate = matchDate.toLocaleDateString('sv-SE', {
                day: 'numeric',
                month: 'numeric',
              })
              return (
                <li
                  key={`${match.round}-${index}`}
                  className="border-2 shadow-md shadow-black/40 overflow-hidden mb-4"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4 text-sm opacity-70">
                      <span>{shortDate}</span>
                      <span>Omgång {match.round}</span>
                    </div>
                    <div className="grid grid-row-[1fr_50px_1fr] sm:grid-cols-[1fr_50px_1fr] mb-5">
                      <div className="flex items-center justify-center sm:justify-end gap-2">
                        {match.homeTeam.logo && (
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <Image
                              src={match.homeTeam.logo}
                              alt={match.homeTeam.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="font-semibold truncate">{match.homeTeam.name}</span>
                      </div>

                      <span className="text-lg font-bold text-center">–</span>

                      <div className="flex flex-row-reverse sm:flex-row items-center justify-center sm:justify-start gap-2 flex-1">
                        <span className="font-semibold truncate">{match.awayTeam.name}</span>
                        {match.awayTeam.logo && (
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <Image
                              src={match.awayTeam.logo}
                              alt={match.awayTeam.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </>
  )
}

export default UpcomingMatches
