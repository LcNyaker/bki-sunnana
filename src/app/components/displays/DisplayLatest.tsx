import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import type { Media } from '@/payload-types'
import Link from 'next/link'
import Button from '../buttons/Button'

const DisplayLatest = async () => {
  const payload = await getPayload({ config })

  const newsRes = await payload.find({
    collection: 'news',
    where: {
      published: { equals: true },
    },
    sort: '-createdAt',
    limit: 1,
    depth: 1,
  })

  const latest = newsRes.docs[0]
  const image = typeof latest.image === 'object' ? (latest.image as Media) : null
  console.log(latest)
  const link = `/nyheter/${latest.slug}`

  return (
    <Link href={link} className="group block">
      <div className="relative border-2 shadow-lg shadow-black/40 overflow-hidden rounded-md">
        <div className="relative z-10 flex justify-center py-2 bg-white">
          <h3 className="text-lg font-semibold">{latest.title}</h3>
        </div>
        <div className="group-hover:blur-sm transition duration-300">
          <div className="w-full h-[300px] px-2 mb-2">
            {image?.url && (
              <Image
                src={image.url}
                alt={image.alt || latest.title}
                width={image.width ?? 300}
                height={image.height ?? 300}
                className="object-cover object-top w-full h-full rounded-md"
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
          <Button>Läs mer</Button>
        </div>
      </div>
    </Link>
  )
}

export default DisplayLatest
