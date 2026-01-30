import type { Player, Media } from '@/payload-types'
import Image from 'next/image'
import BackButton from '../../buttons/BackButton'
import { PenguinIcon } from '@/app/assets/Icons/PenguinIcon'
import AnimatedFrame from '../../animations/AnimatedFrame'

type PlayerProps = {
  player: Player
}

const PlayerDisplay = ({ player }: PlayerProps) => {
  const portrait =
    typeof player.images?.portrait === 'object' ? (player.images.portrait as Media) : null

  const getAge = (dateOfBirth: string) => {
    const birth = new Date(dateOfBirth)
    const today = new Date()

    let age = today.getFullYear() - birth.getFullYear()
    const hasHadBirthdayThisYear =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())

    if (!hasHadBirthdayThisYear) age--

    return age
  }

  return (
    <section className="mt-10 md:mt-8 section-wrapper">
      <section className="relative grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[260px_1fr] sm:gap-x-10 mb-10">
        <h1 className="title-accent sm:col-span-2 mb-4 sm:mb-8">{player.fullName}</h1>
        {portrait?.url && (
          <AnimatedFrame className="relative aspect-[3/4] lg:w-[260px]">
            <Image
              src={portrait.url}
              alt={portrait.alt ?? `Helbild på ${player.fullName}`}
              fill
              className="object-cover"
              priority
            />
          </AnimatedFrame>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 sm:mt-0 mt-4 lg:grid-cols-2 gap-4 sm:gap-0 sm:grid-rows-4 md:grid-rows-5 lg:grid-rows-6 xl:grid-rows-7">
          <li>
            <h2 className="text-sm text-gray-500">Förnamn</h2>
            <span className="font-semibold">{player.forename}</span>
          </li>

          <li>
            <h2 className="text-sm text-gray-500">Efternamn</h2>
            <span className="font-semibold">{player.lastname}</span>
          </li>

          <li>
            <h2 className="text-sm text-gray-500">Ålder</h2>
            <span className="font-semibold">{getAge(player.dateOfBirth)}</span>
          </li>

          <li>
            <h2 className="text-sm text-gray-500">Tröjnummer</h2>
            <span className="font-semibold">#{player.jerseyNumber}</span>
          </li>

          <li>
            <h2 className="text-sm text-gray-500">Position</h2>
            <span className="font-semibold">{player.position}</span>
          </li>

          {(player.stickSide === 'left' || player.stickSide === 'right') && (
            <li>
              <h2 className="text-sm text-gray-500">Skottfattning</h2>
              <span className="font-semibold">
                {player.stickSide === 'left' ? 'Left' : 'Right'}
              </span>
            </li>
          )}
        </ul>
        <div className="absolute -right-5 -bottom-3 text-black hidden md:flex">
          <PenguinIcon size={200} />
        </div>
      </section>
      <div className="w-full flex justify-center">
        <BackButton fallbackHref="/truppen" fallTo="truppen" />
      </div>
      <div className="card"></div>
    </section>
  )
}

export default PlayerDisplay
