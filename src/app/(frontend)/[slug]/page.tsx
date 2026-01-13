import { RenderBlocks } from '@/app/components/RenderBlocks'
import { getPageBySlug } from '@/app/lib/getPageBySlug'

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug)

  if (!page) {
    return <div>404</div>
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
