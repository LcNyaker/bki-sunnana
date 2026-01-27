// app/components/blocks/VolunteersBlock.tsx
import VolunteerCards from '@/app/components/cards/volunteer/VolunteerCards'

type VolunteersBlockProps = {
  title?: string
  description?: string
}

export const VolunteersBlock = ({ title, description }: VolunteersBlockProps) => {
  return (
    <section className="w-full section-wrapper flex flex-col items-center gap-12 mt-10">
      <div className="w-full">
        <div className="pb-4 mb-10">
          {title && <h1 className="text-center text-4xl">{title}</h1>}
          {description && (
            <p className="mt-4 text-center max-w-3xl mx-auto text-gray-700">{description}</p>
          )}
        </div>
        <VolunteerCards />
      </div>
    </section>
  )
}
