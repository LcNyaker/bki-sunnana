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
      <section className="border-2 shadow-lg shadow-black/40 p-4 flex flex-col justify-center h-full">
        <div className="flex justify-start items-start flex-1">
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
        <div className="flex flex-col items-center flex-1 my-6 gap-1 text-sm">
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
