import Image from 'next/image'
import type { Media } from '@/payload-types'
import { EnvelopeIcon, PhoneIcon } from '@phosphor-icons/react'
import type { Coach } from '@/payload-types'
import Link from 'next/link'

type CardProps = {
  coach: Coach
}

const CoachCard = ({ coach }: CardProps) => {
  const image = typeof coach.image === 'object' ? (coach.image as Media) : null

  const phoneHref = coach.phone?.replace(/\s+/g, '') // Formateerar telefonnumret för href

  return (
    <div className="flex items-center flex-col xs:flex-row gap-4 border p-4 rounded-md shadow-lg shadow-black/40 overflow-hidden">
      <div className="relative h-32 w-32 shrink-0 rounded-full overflow-hidden bg-gray-300">
        {image?.url && (
          <Image
            src={image?.url}
            alt={image?.alt || `${coach.forename} ${coach.lastname}`}
            fill
            className="object-cover object-top"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex-1 min-w-0 w-full">
        <p className="font-semibold text-lg mt-2 truncate">
          {coach.forename} {coach.lastname}
        </p>

        <ul className="space-y-1 truncate text-sm text-gray-600">
          {coach.role && <li>{coach.role}</li>}
          {coach.email && (
            <li className="group">
              <Link
                href={`mailto:${coach.email}`}
                className="
                inline-flex items-center gap-1
                underline-offset-4
                group-hover:underline
                group-hover:text-black
                focus:outline-2 focus:outline-offset-[-2px] 
                transition
                "
                aria-label={`Skicka e-post till ${coach.forename} ${coach.lastname}`}
              >
                <EnvelopeIcon aria-hidden="true" className="group-hover:text-black" />
                <span className="truncate block max-w-full">{coach.email}</span>
              </Link>
            </li>
          )}
          {coach.phone && (
            <li className="group">
              <a
                href={`tel:${phoneHref}`}
                className="
                inline-flex items-center gap-1
                underline-offset-4
                group-hover:underline
                group-hover:text-black
                focus:outline-2 focus:outline-offset-[-2px]
                transition
                "
                aria-label={`Ring till ${coach.forename} ${coach.lastname}`}
              >
                <PhoneIcon aria-hidden="true" className="group-hover:text-black" />
                <span className="truncate block max-w-full">{coach.phone}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default CoachCard
