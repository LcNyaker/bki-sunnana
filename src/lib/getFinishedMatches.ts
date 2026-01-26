import type { LatestMatch } from '@/types/everysport/ui/latest-match'

const TEAM_ID = 165144
const apiKey = process.env.EVERYSPORT_API_KEY

// API-struktur (samma som för upcoming)
type EverysportEvent = {
  round: number
  startDate: string
  homeTeamScore: number
  visitingTeamScore: number
  league: {
    name: string
  }
  facts?: {
    arena?: {
      name: string
    }
  }
  homeTeam: {
    name: string
    logo: string | null
  }
  visitingTeam: {
    name: string
    logo: string | null
  }
}

type EverysportApiResponse = {
  events: EverysportEvent[]
}

export async function getFinishedMatches(): Promise<LatestMatch[] | null> {
  if (!apiKey) {
    console.error('Missing API key')
    return null
  }

  try {
    const res = await fetch(
      `https://api.everysport.com/v1/events?team=${TEAM_ID}&status=FINISHED&sort=startDate:desc&limit=10&apikey=${apiKey}`,
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

    const data: EverysportApiResponse = await res.json()
    const events = data.events

    if (!events || events.length === 0) {
      console.error('No events found')
      return null
    }

    return events.map((event: EverysportEvent) => ({
      round: event.round,
      leagueName: event.league.name,
      homeTeam: {
        name: event.homeTeam.name,
        logo: event.homeTeam.logo,
        score: event.homeTeamScore,
      },
      awayTeam: {
        name: event.visitingTeam.name,
        logo: event.visitingTeam.logo,
        score: event.visitingTeamScore,
      },
    }))
  } catch (error) {
    console.error('Everysport error:', error)
    return null
  }
}
