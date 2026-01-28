import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const SponsorBlock = async () => {
  const payload = await getPayload({ config })

  const sponsors = await payload.find({
    collection: 'sponsors',
    limit: 100,
  })

  if (!sponsors.docs.length) return null

  const sponsorsWithLogo = sponsors.docs.filter(
    (sponsor) => typeof sponsor.logo === 'object' && sponsor.logo?.url,
  )

  if (!sponsorsWithLogo.length) return null

  return (
    <section className="w-full overflow-hidden bg-white py-4 mb-10 ">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...sponsors.docs, ...sponsors.docs, ...sponsors.docs].map((sponsor, index) => (
            <a
              key={`${sponsor.id}-${index}`}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[160px]"
              aria-label={`${sponsor.name} - öppnas i nytt fönster`}
            >
              {typeof sponsor.logo === 'object' && sponsor.logo?.url && (
                <Image
                  src={sponsor.logo.url}
                  alt={sponsor.name}
                  width={140}
                  height={80}
                  className="object-contain"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
