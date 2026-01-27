import { getUpcomingMatches } from '@/lib/getUpcomingMatches'
import { getFinishedMatches } from '@/lib/getFinishedMatches'
import MatchesClient from '../MatchesClient'
import SeriesTable from '../tables/SeriesTable'

const MatchesWrapper = async () => {
  // Hämta båda typerna av matcher server-side
  const upcomingMatches = await getUpcomingMatches()
  const finishedMatches = await getFinishedMatches()

  return (
    <MatchesClient
      upcomingMatches={upcomingMatches}
      finishedMatches={finishedMatches}
      seriesTable={<SeriesTable />} //Eftersom vi vill återanvända en serverkomponent som hämtar sin egen data i en client komponent så hämtar vi och skickar in hela komponenten
    />
  )
}

export default MatchesWrapper
