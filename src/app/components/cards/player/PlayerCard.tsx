import Image from 'next/image'
import type { Player, Media } from '@/payload-types'

type CardProps = {
  player: Player
}

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

const PlayerCard = ({ player }: CardProps) => {
  const profileImage =
    typeof player.images?.profile === 'object' ? (player.images.profile as Media) : null

  return (
    <div className="flex flex-col xs:flex-row relative items-center gap-4 border p-4 rounded-md shadow-lg shadow-black/40 overflow-hidden">
      <div className="relative h-32 w-32 shrink-0 rounded-full overflow-hidden bg-neutral-200">
        {profileImage?.url && (
          <Image
            src={profileImage.url}
            alt={profileImage.alt ?? player.fullName}
            fill
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-lg mb-2">
          {player.forename} {player.lastname}
        </p>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>{player.position === 'goalie' ? 'Målvakt' : player.position}</li>

          <li>Ålder: {getAge(player.dateOfBirth)}</li>

          {player.stickSide !== 'none' && <li className="">Stickside: {player.stickSide}</li>}
        </ul>
      </div>
      <span
        className="
          sm:absolute bottom-3 right-3
          text-6xl md:text-8xl font-extrabold
          bg-gradient-to-r from-primary-500 to-primary-200
          bg-clip-text text-transparent
          select-none pointer-events-none
        "
      >
        #{player.jerseyNumber}
      </span>
    </div>
  )
}

export default PlayerCard
