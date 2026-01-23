import type { LatestMatch } from '@/types/ui/latest-match'

const TEAM_ID = 165144
const apiKey = process.env.EVERYSPORT_API_KEY

export async function getLatestMatch(): Promise<LatestMatch | null> {
  if (!apiKey) {
    console.error('Missing API key')
    return null
  }

  try {
    const res = await fetch(
      `https://api.everysport.com/v1/events?team=${TEAM_ID}&status=FINISHED&sort=startDate:desc&limit=1&apikey=${apiKey}`,
      {
        next: {
          revalidate: 60 * 20, // 20 minuter
        },
      },
    )

    if (!res.ok) {
      console.error('Everysport request failed')
      return null
    }

    const data = await res.json()
    const event = data.events?.[0]

    if (!event) {
      console.error('No event found')
      return null
    }

    return {
      round: event.round,
      leagueName: event.league.name,
      homeTeam: {
        name: event.homeTeam.name,
        logo: event.homeTeam.logo ?? null,
        score: event.homeTeamScore,
      },
      awayTeam: {
        name: event.visitingTeam.name,
        logo: event.visitingTeam.logo ?? null,
        score: event.visitingTeamScore,
      },
    }
  } catch (error) {
    console.error('Everysport error:', error)
    return null
  }
}
