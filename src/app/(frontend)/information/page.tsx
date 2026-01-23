import { RenderBlocks } from '@/app/components/RenderBlocks'
import { getPageBySlug } from '@/lib/getPageBySlug'

const InformationPage = async () => {
  const page = await getPageBySlug('information')

  if (!page) {
    return <div>404</div>
  }

  return (
    <main>{page.layout && page.layout.length > 0 && <RenderBlocks layout={page.layout} />}</main>
  )
}

export default InformationPage
