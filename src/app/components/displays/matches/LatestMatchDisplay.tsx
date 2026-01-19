import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import type { Match } from '@/payload-types'
import Button from '../../buttons/Button'

type MatchDisplayProps = {
  latestMatch: Match
}

const LatestMatchDisplay = async ({ latestMatch }: MatchDisplayProps) => {
  const payload = await getPayload({ config })

  const team = typeof latestMatch.team === 'string' ? null : latestMatch.team
  const opponent = typeof latestMatch.opponent === 'string' ? null : latestMatch.opponent

  if (!team || !opponent) return null

  const [logoGlobal] = await Promise.all([
    payload.findGlobal({ slug: 'logo', depth: 1 }),
    payload.findGlobal({ slug: 'club-arenas', depth: 1 }),
  ])

  const clubLogo = logoGlobal?.logo

  const isHomeGame = latestMatch.isHomeGame

  const homeTeam = isHomeGame ? team : opponent
  const awayTeam = isHomeGame ? opponent : team

  const homeScore = isHomeGame ? latestMatch.teamScore : latestMatch.opponentScore

  const awayScore = isHomeGame ? latestMatch.opponentScore : latestMatch.teamScore

  const homeLogo = isHomeGame ? clubLogo : opponent.logo
  const awayLogo = isHomeGame ? opponent.logo : clubLogo

  return (
    <>
      <h3 className="text-lg p-2">Omgång {latestMatch.round}</h3>
      <section className="border-2 shadow-lg shadow-black/40 p-4">
        <div className="flex justify-center items-center mb-4">
          <span className="text-sm opacity-70">{team.league}</span>
        </div>
        <div className="flex flex-col xs:flex-row items-center gap-4 justify-around">
          <div>
            {homeLogo && typeof homeLogo !== 'string' && (
              <div className="flex-1 flex flex-col items-center justify-between gap-2 w-[100px] text-center">
                <Image
                  src={homeLogo.url || 'fallback'}
                  alt={homeLogo.alt || homeTeam.name}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="shrink-0"
                />
                <div>
                  <p className="font-medium">{homeTeam.name}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center flex-col xs:flex-row justify-center gap-2 text-3xl font-bold">
            <span>{homeScore}</span>
            <span>–</span>
            <span>{awayScore}</span>
          </div>
          <div>
            {awayLogo && typeof awayLogo !== 'string' && (
              <div className="flex-1 flex flex-col items-center justify-between gap-2 text-center w-[100px]">
                <Image
                  src={awayLogo.url || 'fallback'}
                  alt={awayLogo.alt || awayTeam.name}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="shrink-0"
                />

                <p className="font-medium text-sm w-full">{awayTeam.name}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button href="/">Matchdetaljer</Button>
        </div>
      </section>
    </>
  )
}

export default LatestMatchDisplay
