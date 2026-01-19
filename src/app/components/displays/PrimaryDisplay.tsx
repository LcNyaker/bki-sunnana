/* import Image from 'next/image'
import Link from 'next/link'
import Button from '../buttons/Button' */
import { getPayload } from 'payload'
import config from '@payload-config'
import SeriesTable from '../tables/SeriesTable'
import LatestMatchDisplay from './matches/LatestMatchDisplay'

const PrimaryDisplay = async () => {
  const payload = await getPayload({ config })

  const latestMatchesRes = await payload.find({
    collection: 'matches',
    where: {
      isFinished: {
        equals: true,
      },
    },
    sort: 'date',
    depth: 2,
  })

  const latestMatches = latestMatchesRes.docs
  const match = latestMatches[0]

  return (
    <>
      <section className="w-full grid grid-cols-1 items-stretch lg:grid-cols-5 gap-10 section-wrapper lg:gap-6">
        <div className="lg:col-span-3">
          <h2 className="title-accent text-xl font-bold py-1">Senaste Matchen</h2>
          <LatestMatchDisplay latestMatch={match} />
        </div>

        <div className="lg:col-span-2 flex flex-col h-full">
          <h2 className="text-xl title-accent font-bold py-1">Tabell</h2>
          <SeriesTable />
        </div>
      </section>
    </>
  )
}

export default PrimaryDisplay
