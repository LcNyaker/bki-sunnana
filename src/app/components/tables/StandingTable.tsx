import Image from 'next/image'
import OverviewTable from './OverviewTable'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react/dist/ssr'

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

  const [logoGlobal, clubArenasGlobal] = await Promise.all([
    payload.findGlobal({ slug: 'logo', depth: 1 }),
    payload.findGlobal({ slug: 'club-arenas', depth: 1 }),
  ])

  const clubLogo = logoGlobal?.logo
  const primaryArena = clubArenasGlobal?.arenas?.find((arena) => arena.isPrimary)

  const formattedDate = new Date(nextMatch.date).toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <>
      <section className="w-full grid grid-cols-1 lg:grid-cols-5 section-wrapper lg:gap-6">
        <div className="col-span-1 lg:col-span-3 flex mb-4 lg:mb-[unset] flex-col">
          <div className="bg-secondary-500 px-4 pt-4 flex gap-4">
            <h2 className="text-xl font-bold">Herrar</h2>
            <h2 className="text-xl font-bold">Damer</h2>
          </div>

          <div className="bg-secondary-500 flex flex-col">
            <div className="flex justify-center md:justify-between px-4 mt-4">
              <h3 className="text-lg font-semibold">Nästa match</h3>
              <div>
                <p className="hidden md:flex">{nextMatch.team.league}</p>
                <p className="text-right">Omgång {nextMatch.round}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 mt-4 justify-center">
              <div className="flex flex-col flex-1 items-center gap-2">
                {clubLogo && typeof clubLogo !== 'string' && (
                  <Image
                    src={clubLogo.url || 'fallback'}
                    alt={clubLogo.alt || nextMatch.team.name}
                    width={64}
                    height={64}
                  />
                )}
                <h4>{nextMatch.team.name}</h4>
              </div>

              <span className="text-2xl">–</span>

              <div className="flex flex-col items-center flex-1 gap-2">
                {nextMatch.opponent.logo && typeof nextMatch.opponent.logo !== 'string' && (
                  <Image
                    src={nextMatch.opponent.logo.url || 'fallback'}
                    alt={nextMatch.opponent.logo.alt || nextMatch.opponent.name}
                    width={64}
                    height={64}
                  />
                )}
                <h4>{nextMatch.opponent.name}</h4>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4 pb-4 gap-1">
              <div className="flex items-center gap-2">
                <ClockIcon />
                <p>{formattedDate}</p>
              </div>

              <div className="flex items-center gap-2">
                <MapPinIcon />
                <p>
                  {primaryArena?.address}, {primaryArena?.city}
                </p>
              </div>
              <h4 className="font-bold">{primaryArena?.name}</h4>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <OverviewTable />
        </div>
      </section>

      <section className="w-full section-wrapper mt-20">
        <h3 className="text-lg font-semibold">Kommande matcher</h3>

        {futureMatches.map((match) => {
          if (typeof match.team === 'string' || typeof match.opponent === 'string') {
            return null
          }

          const shortDate = new Date(match.date).toLocaleDateString('sv-SE', {
            day: 'numeric',
            month: 'numeric',
          })

          return (
            <div key={match.id} className="bg-secondary-500 mb-2">
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
    </>
  )
}

export default StandingTable
