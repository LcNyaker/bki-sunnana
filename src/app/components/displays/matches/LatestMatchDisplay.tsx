import Image from 'next/image'
import type { LatestMatch } from '@/types/ui/latest-match'

type LatestMatchProps = {
  match: LatestMatch
}

const LatestMatchDisplay = ({ match }: LatestMatchProps) => {
  if (!match) {
    return (
      <section className="border-2 shadow-lg shadow-black/40 p-4">
        <p className="text-center opacity-70">Kunde inte hämta senaste match</p>
      </section>
    )
  }

  return (
    <section className="border-2 shadow-lg shadow-black/40 p-4">
      <div className="flex justify-start items-center mb-4">
        <span className="text-sm font-semibold opacity-70">Omgång {match.round}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 text-sm gap-4">
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
          <span className="font-semibold">{match.homeTeam.name}</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="text-5xl font-bold">{match.homeTeam.score}</span>
          <span className="text-3xl opacity-50">–</span>
          <span className="text-5xl font-bold">{match.awayTeam.score}</span>
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
          <span className="font-semibold">{match.awayTeam.name}</span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 gap-1 text-sm">
        <span className="opacity-70">{match.leagueName}</span>
      </div>
    </section>
  )
}

export default LatestMatchDisplay
