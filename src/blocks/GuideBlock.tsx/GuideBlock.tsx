import React from 'react'
/* import { Media } from '@/payload-types' */
import { Guide } from '@/payload-types'
import Link from 'next/link'

/* type LexicalContent = {
  root: {
    children: any[]
    direction: string | null
    format: string
    indent: number
    type: string
    version: number
  }
} */

/* type Guide = {
  id: string
  title: string
  content: LexicalContent 
  image?: Media
  createdAt: string
  author: string
} */

// Fetch latest 5 posts from Payload CMS
async function fetchGuide() {
  const res = await fetch('http://localhost:3000/api/guides', { cache: 'no-store' })
  const data = await res.json()
  console.log(data)
  return data.docs
}

export const GuideBlock = async () => {
  const guides = await fetchGuide()

  console.log(guides)
  return (
    <>
      <section className="px-4 bg-gray-900">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">Guides</h2>
        <div>
          <div className="w-full flex flex-col items-center">
            {guides.map((g: Guide) => (
              <article key={g.id} className="flex  justify-between border-b-2 w-full pb-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <h2 className="">{g.title}</h2>
                  </div>
                  <div>
                    <span>by: {g.author}</span>
                  </div>
                </div>
                <Link
                  href={`/guides/${g.slug}`}
                  className="flex justify-center items-center text-amber-400 border rounded-lg whitespace-nowrap px-4 hover:bg-amber-400 hover:text-gray-900 animate-breathe"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
