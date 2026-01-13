// app/(frontend)/page.tsx

import { RenderBlocks } from '../components/RenderBlocks'
import StandingTable from '../components/tables/StandingTable'
import { getPageBySlug } from '../lib/getPageBySlug'

export default async function HomePage() {
  const page = await getPageBySlug('/')

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
        <div>
          <RenderBlocks layout={page.layout} />
          <StandingTable />
        </div>
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
