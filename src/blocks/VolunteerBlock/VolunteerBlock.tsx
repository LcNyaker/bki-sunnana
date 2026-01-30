import GetVolunteers from '@/app/components/cards/volunteer/GetVolunteers'

type VolunteersBlockProps = {
  title?: string
  description?: string
}

export const VolunteersBlock = ({ title, description }: VolunteersBlockProps) => {
  return (
    <section className="w-full section-wrapper md:mt-8 mt-10">
      <div className="mb-8">
        <h1 className="title-accent">Om oss</h1>
      </div>
      <div className="w-full">
        <div className="px-4">
          {title && <h2 className="text-center text-4xl">{title}</h2>}
          {description && (
            <p className="mt-4 text-center max-w-3xl mx-auto text-gray-700">{description}</p>
          )}
        </div>
        <GetVolunteers />
      </div>
    </section>
  )
}
