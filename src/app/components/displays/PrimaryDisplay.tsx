import DisplayLatest from './DisplayLatest'
import SeriesTable2 from '../tables/SerisTable2'

import type { SeriesTable as SeriesTableType } from '@/types/ui/series-table'

type SeriesProps = {
  seriesTable: SeriesTableType | null
}
const PrimaryDisplay = ({ seriesTable }: SeriesProps) => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-[393px] gap-10 section-wrapper">
      <div className="lg:col-span-3">
        <div className="h-full">
          <h2 className="title-accent text-xl font-bold py-1 mb-2">Senaste</h2>
          <DisplayLatest />
        </div>
      </div>

      <div className="lg:col-span-2">
        <h2 className="title-accent text-xl font-bold py-1 mb-2">Tabell</h2>
        {seriesTable && <SeriesTable2 table={seriesTable} />}
      </div>
    </section>
  )
}

export default PrimaryDisplay
