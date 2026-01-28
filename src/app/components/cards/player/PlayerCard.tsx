import Image from 'next/image'
import type { Player, Media } from '@/payload-types'
import Link from 'next/link'

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
    <Link
      href={`/trupper/${player.slug}`}
      className="group"
      aria-label={`Läs mer om ${player.forename} ${player.lastname}`}
    >
      <div className="flex flex-col xs:flex-row relative items-center gap-4 border p-4 group-hover:bg-gradient-to-r group-hover:from-secondary-400 group-hover:to-primary-500 group-focus:bg-gradient-to-r group-focus:from-secondary-400 group-focus:to-primary-500 rounded-md shadow-lg shadow-black/40 overflow-hidden">
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
          <p className="font-semibold text-lg mb-2 whitespace-nowrap">
            {player.forename} {player.lastname}
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Position: {player.position === 'goalie' ? 'Målvakt' : player.position}</li>

            <li>Ålder: {getAge(player.dateOfBirth)}</li>
          </ul>
        </div>
        <span
          className="
          absolute bottom-3 right-3
          text-5xl md:text-8xl font-extrabold
          bg-gradient-to-r from-primary-500 to-primary-200
          bg-clip-text text-transparent
          select-none pointer-events-none
          group-hover:from-white group-hover:to-white
          group-focus:from-white group-focus:to-white
          transition-colors duration-500
        "
        >
          #{player.jerseyNumber}
        </span>
      </div>
    </Link>
  )
}

export default PlayerCard
