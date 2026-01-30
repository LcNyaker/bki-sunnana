import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import type { Media } from '@/payload-types'
import Link from 'next/link'
import Button from '../buttons/Button'

const DisplayLatestNews = async () => {
  const payload = await getPayload({ config })

  const newsRes = await payload.find({
    collection: 'news',
    where: {
      published: { equals: true },
    },
    sort: '-publishedAt',
    limit: 1,
    depth: 1,
  })

  const latest = newsRes.docs[0]
  const image = typeof latest.image === 'object' ? (latest.image as Media) : null
  const link = `/nyheter/${latest.slug}`

  return (
    <Link href={link} className="group block" aria-label={`Läs mer om ${latest.title}`}>
      <div className="relative border-2 shadow-lg shadow-black/40 overflow-hidden rounded-md">
        <div className="relative z-10 flex justify-center py-2 bg-white">
          <h3 className="text-lg font-semibold">{latest.title}</h3>
        </div>
        <div className="group-hover:blur-sm transition duration-300">
          <div className="w-full h-[295px] px-2 mb-2">
            {image?.url && (
              <Image
                src={image.url}
                alt={image.alt || latest.title}
                width={image.width ?? 300}
                height={image.height ?? 300}
                className="object-cover object-top w-full h-full rounded-md"
                loading="lazy"
              />
            )}
          </div>
        </div>
        <div
          className="
        absolute inset-0
        flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition duration-300
        bg-black/40
      "
        >
          <Button ariaLabel={`Läs mer om ${latest.title}`}>Läs mer</Button>
        </div>
      </div>
    </Link>
  )
}

export default DisplayLatestNews
