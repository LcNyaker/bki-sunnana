// app/(frontend)/page.tsx
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '../components/RenderBlocks'

export default async function HomePage() {
  const payload = await getPayload({ config })

  // Hämta från Pages collection
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: '/', // ← Hämtar specifikt "home" slug
      },
    },
    depth: 2,
    limit: 1,
  })

  const page = result.docs[0]

  // Fallback page inte finns
  if (!page) {
    return (
      <div className="home">
        <div className="content">
          <h1>Home page not found</h1>
        </div>
      </div>
    )
  }

  return (
    <main>
      {/* Rendera alla blocks från home page */}
      {page.layout && page.layout.length > 0 ? (
        <RenderBlocks layout={page.layout} />
      ) : (
        <div className="home">
          <div className="content">
            <h1>{page.title || 'Welcome'}</h1>
            <p>This page has no content blocks yet.</p>
          </div>
        </div>
      )}
    </main>
  )
}
