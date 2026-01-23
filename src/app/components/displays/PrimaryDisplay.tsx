/* import OverviewTable from '../tables/OverviewTable' */
/* import LatestMatchDisplay from './matches/LatestMatchDisplay' */
import SeriesTable from '../tables/SeriesTable'

const PrimaryDisplay = () => {
  return (
    <>
      <section className="w-full grid grid-cols-1 items-stretch lg:grid-cols-5 gap-10 section-wrapper lg:gap-6">
        <div className="lg:col-span-3">
          <h2 className="title-accent text-xl font-bold py-1">Senaste Matchen</h2>
          {/* <LatestMatchDisplay /> */}
        </div>

        <div className="lg:col-span-2 flex flex-col h-full">
          <h2 className="text-xl title-accent font-bold py-1 mb-2">Tabell</h2>
          <SeriesTable />
        </div>
      </section>
    </>
  )
}

export default PrimaryDisplay
