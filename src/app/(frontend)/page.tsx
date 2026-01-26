// app/(frontend)/page.tsx

import PrimaryDisplay from '../components/displays/PrimaryDisplay'
import { RenderBlocks } from '../components/RenderBlocks'
import { getPageBySlug } from '../../lib/getPageBySlug'
import { getSeriesTable } from '@/lib/getSeriesTable'

export default async function HomePage() {
  const page = await getPageBySlug('/')
  const seriesTable = await getSeriesTable()

  if (!page) {
    return (
      <div className="home">
        <div className="content flex justify-center items-center mt-10 section-wrapper px-4">
          <h1>Sidan är under konstruktion... </h1>
        </div>
      </div>
    )
  }

  return (
    <main>
      {page.layout && page.layout.length > 0 ? (
        <div>
          <RenderBlocks layout={page.layout} />
          <PrimaryDisplay seriesTable={seriesTable} />
        </div>
      ) : (
        <div className="home">
          <div className="content">
            <h1>{page.title || 'Welcome'}</h1>
            <p>Sidan har inga block</p>
          </div>
        </div>
      )}
    </main>
  )
}
