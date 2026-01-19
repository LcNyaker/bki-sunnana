// app/(frontend)/page.tsx

import PrimaryDisplay from '../components/displays/PrimaryDisplay'
import { RenderBlocks } from '../components/RenderBlocks'
import { getPageBySlug } from '../lib/getPageBySlug'

export default async function HomePage() {
  const page = await getPageBySlug('/')

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
      {page.layout && page.layout.length > 0 ? (
        <div>
          <RenderBlocks layout={page.layout} />
          <PrimaryDisplay />
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
