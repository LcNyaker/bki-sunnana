// app/(frontend)/page.tsx
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import { Employees } from '@/app/components/Employees'

export default async function AboutPage() {
  const payload = await getPayload({ config })

  // Hämta från Pages collection
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'about', // ← Hämtar specifikt "home" slug
      },
    },
    limit: 1,
  })

  const page = result.docs[0]

  // Fallback page inte finns
  if (!page) {
    return (
      <div className="home">
        <div className="content">
          <h1>page not found</h1>
        </div>
      </div>
    )
  }

  return (
    <main className="flex flex-col gap-20">
      {/* Rendera alla blocks från home page */}
      {page.layout && page.layout.length > 0 ? <RenderBlocks layout={page.layout} /> : <div></div>}
      <Employees />
    </main>
  )
}
