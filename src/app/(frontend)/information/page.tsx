import Breadcrumbs from '@/app/components/fixtures/header/Breadcrumbs'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import { getPageBySlug } from '@/lib/getPageBySlug'
import { notFound } from 'next/navigation'

const InformationPage = async () => {
  const page = await getPageBySlug('information')

  if (!page) {
    return notFound()
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={page?.breadcrumbs} />
      <main>
        <section className="mt-10 md:mt-8">
          <div className="section-wrapper mb-8">
            <h1 className="title-accent">{page.title}</h1>
          </div>

          {page.layout && page.layout.length > 0 && <RenderBlocks layout={page.layout} />}
        </section>
      </main>
    </>
  )
}

export default InformationPage
