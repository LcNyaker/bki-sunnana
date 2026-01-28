import DisplayLatest from './DisplayLatestNews'
import SeriesTable from '../tables/SeriesTable'

const PrimaryDisplay = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-5 gap-10 section-wrapper">
      <div className="lg:col-span-3">
        <div className="h-full">
          <h2 className="title-accent text-xl font-bold py-1 mb-4">Senaste</h2>
          <DisplayLatest />
        </div>
      </div>

      <div className="lg:col-span-2">
        <h2 className="title-accent text-xl font-bold py-1 mb-4">Tabell</h2>
        <SeriesTable />
      </div>
    </section>
  )
}

export default PrimaryDisplay
