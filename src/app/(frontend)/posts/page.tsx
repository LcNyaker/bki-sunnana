/* // app/(frontend)/page.tsx
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import PostList from '@/app/components/PostList'

export default async function GuidePage() {
  const payload = await getPayload({ config })

  // Hämta från Pages collection
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'posts', // ← Hämtar specifikt "home" slug
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
    <main className="flex flex-col gap-20 mt-20">
      {page.layout && page.layout.length > 0 ? <RenderBlocks layout={page.layout} /> : <div></div>}
      <PostList />
    </main>
  )
}
 */
