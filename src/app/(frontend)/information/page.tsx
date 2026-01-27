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
      <main>{page.layout && page.layout.length > 0 && <RenderBlocks layout={page.layout} />}</main>
    </>
  )
}

export default InformationPage
