import type { NextMatch } from '@/types/ui/next-match'

const TEAM_ID = 165144
const apiKey = process.env.EVERYSPORT_API_KEY

export async function getNextMatch(): Promise<NextMatch | null> {
  if (!apiKey) {
    console.error('Missing API key')
    return null
  }

  try {
    const res = await fetch(
      `https://api.everysport.com/v1/events?team=${TEAM_ID}&status=UPCOMING&sort=startDate:asc&limit=1&apikey=${apiKey}`,
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

    const data = await res.json()
    const event = data.events?.[0]

    if (!event) {
      console.error('No event found')
      return null
    }

    return {
      round: event.round,
      startDate: event.startDate,

      arena: event.facts?.arena ? { name: event.facts.arena.name } : null,

      leagueName: event.league.name,
      homeTeam: {
        name: event.homeTeam.name,
        logo: event.homeTeam.logo ?? null,
      },
      awayTeam: {
        name: event.visitingTeam.name,
        logo: event.visitingTeam.logo ?? null,
      },
    }
  } catch (error) {
    console.error('Everysport error:', error)
    return null
  }
}
