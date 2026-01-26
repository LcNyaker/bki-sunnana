import Image from 'next/image'
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react/dist/ssr'
import type { NextMatch } from '@/types/everysport/ui/next-match'

type NextMatchProps = {
  match: NextMatch
}

const NextMatchDisplay = ({ match }: NextMatchProps) => {
  if (!match?.startDate) return null

  const formattedDate = new Date(match?.startDate).toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })

  if (!match) {
    return (
      <section className="border-2 shadow-lg shadow-black/40 p-4 h-full">
        <p className="text-center opacity-70">Kunde inte hämta senaste match</p>
      </section>
    )
  }

  return (
    <>
      <section className="border-2 shadow-lg shadow-black/40 p-4">
        <div className="flex justify-start items-center mb-4">
          <span className="text-sm font-semibold opacity-70">Omgång {match.round}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 text-sm">
          <div className="flex flex-col items-center justify-between gap-2">
            {match.homeTeam.logo && (
              <Image
                src={match.homeTeam.logo}
                alt={match.homeTeam.name}
                width={100}
                height={100}
                className="object-contain w-24 h-24"
              />
            )}
            <span>{match.homeTeam.name}</span>
          </div>

          <div className="flex items-center justify-center text-5xl font-bold">
            <span>–</span>
          </div>

          <div className="flex flex-col items-center justify-between gap-2">
            {match.awayTeam.logo && (
              <Image
                src={match.awayTeam.logo}
                alt={match.awayTeam.name}
                width={100}
                height={100}
                className="object-contain w-24 h-24"
              />
            )}
            <span>{match.awayTeam.name}</span>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 gap-1 text-sm">
          {match.startDate && (
            <div className="flex items-center font-semibold gap-2 opacity-80">
              <ClockIcon weight="bold" />
              <span>{formattedDate}</span>
            </div>
          )}

          {match.arena && (
            <>
              <div className="flex items-center gap-2 opacity-80">
                <MapPinIcon weight="bold" />
                <p className="font-semibold">{match.arena.name}</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default NextMatchDisplay

{
  /* 
type MatchDisplayProps = {
  nextMatch: Match
}

const NextMatchDisplay = async ({ nextMatch }: MatchDisplayProps) => {
  const payload = await getPayload({ config })

  const team = typeof nextMatch.team === 'string' ? null : nextMatch.team
  const opponent = typeof nextMatch.opponent === 'string' ? null : nextMatch.opponent

  if (!team || !opponent) return null

  const [logoGlobal, clubArenasGlobal] = await Promise.all([
    payload.findGlobal({ slug: 'logo', depth: 1 }),
    payload.findGlobal({ slug: 'club-arenas', depth: 1 }),
  ])

  const clubLogo = logoGlobal?.logo
  const primaryArena = clubArenasGlobal?.arenas?.find((arena) => arena.isPrimary)


  return (
    <>
      <h3 className="text-lg p-2">Omgång {nextMatch.round}</h3>

      <section className="border-2 p-4 shadow-lg shadow-black/40">
        <div className="flex justify-center items-center mb-4">
          <span className="text-sm opacity-70">{team.league}</span>
        </div>
        <div className="flex flex-col xs:flex-row items-center gap-4 justify-around">
          <div>
            {clubLogo && typeof clubLogo !== 'string' && (
              <div className="flex flex-col items-center gap-2 w-[100px] text-center">
                <Image
                  src={clubLogo.url || '/logo.png'}
                  alt={clubLogo.alt || team.name}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="shrink-0"
                />
                <p className="font-medium text-sm w-full">{team.name}</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center text-3xl font-bold">
            <span>–</span>
          </div>
          <div>
            {opponent.logo && typeof opponent.logo !== 'string' && (
              <div className="flex flex-col items-center gap-2 w-[100px] text-center">
                <Image
                  src={opponent.logo.url || 'fallback'}
                  alt={opponent.logo.alt || opponent.name}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="shrink-0"
                />
                <p className="font-medium text-sm w-full">{opponent.name}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center mt-6 gap-1 text-sm">
          <div className="flex items-center gap-2 opacity-80">
            <ClockIcon />
            <span>{formattedDate}</span>
          </div>

          {primaryArena && (
            <>
              <div className="flex items-center gap-2 opacity-80">
                <MapPinIcon />
                <span>
                  {primaryArena.address}, {primaryArena.city}
                </span>
              </div>
              <p className="font-semibold">{primaryArena.name}</p>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default NextMatchDisplay  */
}
