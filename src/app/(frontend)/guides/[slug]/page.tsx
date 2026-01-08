import config from '@payload-config'
import React from 'react'
import { getPayload } from 'payload'
import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { CaretLeftIcon } from '@phosphor-icons/react/dist/ssr'
import { Checklist } from '@/app/components/collapsibles/Checklist'
/* import { Guides } from '@/collections/Guides' */

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'guides',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  /*   console.log(slug) */

  console.log(result.docs[0])

  const guide = result.docs[0]

  return (
    <section className="pl-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-amber-400 mt-20 pl-4">Guides</h2>
      {!guide ? (
        <p>No guide available yet.</p>
      ) : (
        <div className="flex">
          <article className="w-full flex flex-col items-center p-4">
            <div>
              <h3 className="text-xl">{guide.title}</h3>
              <div className="flex justify-between w-full text-gray-300">
                <div className="flex gap-2">
                  <span>By:</span>
                  <span className="text-amber-400">{guide.author}</span>
                </div>
                <i>{new Date(guide.createdAt).toLocaleDateString()}</i>
              </div>
            </div>
            <div>
              {guide.content && (
                <RichText className="text-center px-20 py-10" data={guide.content} />
              )}
            </div>
            <Link
              href={`/guides`}
              className="flex justify-center text-amber-400 border rounded-lg whitespace-nowrap p-4 hover:bg-amber-400 hover:text-gray-900 animate-breathe"
            >
              <div className="flex items-center gap-2">
                <CaretLeftIcon />
                <span>Return</span>
              </div>
            </Link>
          </article>

          {guide.checklist && <Checklist checklist={guide.checklist} />}
        </div>
      )}
    </section>
  )
}
