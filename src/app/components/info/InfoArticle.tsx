import type { InfoArticle } from '@/payload-types'
import InfoContentRenderer from './RenderInfoContent'

type InfoProps = {
  info: InfoArticle
}

const InfoArticle = ({ info }: InfoProps) => {
  return (
    <article className="section-wrapper max-w-3xl mt-10 mb-20">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{info.title}</h1>

        <div className="flex justify-between flex-col sm:flex-row">
          {info.subtitle && (
            <p className="mt-2 text-lg uppercase text-neutral-600">{info.subtitle}</p>
          )}
        </div>
      </header>
      <section>
        <InfoContentRenderer content={info.content} />
      </section>
    </article>
  )
}

export default InfoArticle
