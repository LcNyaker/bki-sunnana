import Image from 'next/image'
import Link from 'next/link'
import type { Media, Person } from '@/payload-types'
import { EnvelopeIcon, PhoneIcon } from '@phosphor-icons/react'

type CardProps = {
  person: Person
}

const ROLE_LABELS: Record<Person['role'], string> = {
  chairman: 'Ordförande',
  'vice-chairman': 'Vice ordförande',
  secretary: 'Sekreterare',
  treasurer: 'Kassör',
  member: 'Ledamot',
  substitute: 'Suppleant',
  'player-manager': 'Spelaransvarig',
  editor: 'Redaktör',
}

const VolunteerCard = ({ person }: CardProps) => {
  const image = typeof person.image === 'object' ? (person.image as Media) : null

  const phoneHref = person.phone?.replace(/\s+/g, '') // Formateerar telefonnumret för href

  return (
    <div className="flex flex-col xs:flex-row items-center gap-4 border p-4 rounded-md shadow-lg shadow-black/40 overflow-hidden">
      <div className="relative h-32 w-32 shrink-0 rounded-full overflow-hidden bg-neutral-200">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt || `Profilbild på ${person.fullName}`}
            fill
            className="object-cover object-top"
            loading="eager"
          />
        )}
      </div>

      <div className="flex-1 min-w-0 w-full">
        <p className="font-semibold text-lg mt-2 truncate">
          {person.forename} {person.lastName}
        </p>

        <ul className="space-y-1 text-sm text-gray-600">
          <li className="truncate">{ROLE_LABELS[person.role]}</li>

          {person.email && (
            <li className="group">
              <Link
                href={`mailto:${person.email}`}
                className="
                  inline-flex items-center gap-1
                  w-full min-w-0
                  underline-offset-4
                  group-hover:underline
                  group-hover:text-black
                  focus:outline-2 focus:outline-offset-[-2px]
                  transition
                "
                aria-label={`Skicka e-post till ${person.fullName}`}
              >
                <EnvelopeIcon aria-hidden="true" />
                <span className="truncate block max-w-full">{person.email}</span>
              </Link>
            </li>
          )}

          {person.phone && (
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
                aria-label={`Ring till ${person.fullName}`}
              >
                <PhoneIcon aria-hidden="true" className="group-hover:text-black" />
                <span className="truncate block max-w-full">{person.phone}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default VolunteerCard
