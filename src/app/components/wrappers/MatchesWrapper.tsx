import { getUpcomingMatches } from '@/lib/getUpcomingMatches'
import { getFinishedMatches } from '@/lib/getFinishedMatches'
import MatchesClient from '../MatchesClient'
import { getSeriesTable } from '@/lib/getSeriesTable'

const MatchesWrapper = async () => {
  // Hämta båda typerna av matcher server-side
  const upcomingMatches = await getUpcomingMatches()
  const finishedMatches = await getFinishedMatches()
  const seriesTable = await getSeriesTable()

  return (
    <MatchesClient
      upcomingMatches={upcomingMatches}
      finishedMatches={finishedMatches}
      seriesTable={seriesTable}
    />
  )
}

export default MatchesWrapper
