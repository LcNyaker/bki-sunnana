import { PenguinIcon } from '../assets/Icons/PenguinIcon'
import BackButton from './buttons/BackButton'

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-10 section-wrapper px-4">
      <h1>404 – Sidan hittades inte</h1>
      <p>Vi hittade tyvärr inte sidan du letade efter. Men lugn – vi hjälper dig tillbaka!</p>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
        <div className="flex flex-col gap-3 sm:col-start-2 w-full">
          <BackButton fallTo="föregående sida" />
          <BackButton fallbackHref="/" fallTo="startsidan" />
        </div>

        <div className="flex justify-center sm:justify-end">
          <PenguinIcon size={200} />
        </div>
      </div>
    </section>
  )
}

export default NotFound
