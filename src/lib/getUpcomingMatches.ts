import type { NextMatch } from '@/types/ui/next-match'

const TEAM_ID = 165144
const apiKey = process.env.EVERYSPORT_API_KEY

type EverysportEvent = {
  round: number
  startDate: string
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

export async function getUpcomingMatches(): Promise<NextMatch[] | null> {
  if (!apiKey) {
    console.error('Missing API key')
    return null
  }

  try {
    const res = await fetch(
      `https://api.everysport.com/v1/events?team=${TEAM_ID}&status=UPCOMING&sort=startDate:asc&limit=20&apikey=${apiKey}`,
      {
        next: {
          revalidate: 60 * 20,
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
      console.error('No event found')
      return null
    }

    return events.map((event: EverysportEvent) => ({
      round: event.round,
      leagueName: event.league.name,
      startDate: event.startDate,
      arena: event.facts?.arena ? { name: event.facts.arena.name } : null,
      homeTeam: {
        name: event.homeTeam.name,
        logo: event.homeTeam.logo ?? null,
      },
      awayTeam: {
        name: event.visitingTeam.name,
        logo: event.visitingTeam.logo ?? null,
      },
    }))
  } catch (error) {
    console.error('Everysport error:', error)
    return null
  }
}
