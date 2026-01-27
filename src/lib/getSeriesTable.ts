import type { SeriesTable } from '@/types/everysport/ui/series-table'

const LEAGUE_ID = 141500 // Division 5 Värmland västra
const apiKey = process.env.EVERYSPORT_API_KEY

// APIET består av flera objekt, därför delas de upp i egna typer

type EverysportStandingsResponse = {
  league: {
    name: string
    season: {
      name: string
    }
  }
  groups: Array<{
    standings: EverysportStanding[]
  }>
}
type EverysportStandingStat = {
  name: string
  value: string
}

type EverysportStanding = {
  position: number
  team: {
    name: string
    logo?: string
  }
  stats: EverysportStandingStat[]
}

export async function getSeriesTable(): Promise<SeriesTable | null> {
  if (!apiKey) {
    console.error('Missing API key')
    return null
  }

  try {
    const res = await fetch(
      `https://api.everysport.com/v1/leagues/${LEAGUE_ID}/standings?apikey=${apiKey}`,
      {
        next: {
          revalidate: 60 * 60, // 1 timme (tabellen ändras inte så ofta)
        },
      },
    )

    if (!res.ok) {
      console.error('Everysport standings request failed')
      return null
    }

    const data: EverysportStandingsResponse = await res.json()

    if (!data.groups || data.groups.length === 0) {
      console.error('No standings found')
      return null
    }

    const standings = data.groups[0].standings

    return {
      leagueName: data.league.name,

      season: data.league.season.name,

      standings: standings.map((standing) => {
        // Hjälpfunktion för att hitta stat-värde
        const getStat = (name: string): number => {
          //ta emot ett namn och returnera ett nummer
          const stat = standing.stats.find((s) => s.name === name) //letar efter namnet som matchar det som funktionen tar emot
          return stat ? parseInt(stat.value) : 0 // Om stat finns returnera svaret från en string till ett nummer annars ge tillbaka 0
        }

        return {
          position: standing.position,
          teamName: standing.team.name,
          teamLogo: standing.team.logo ?? null,
          played: getStat('gp'),
          wins: getStat('w'),
          draws: getStat('d'),
          losses: getStat('l'),
          goalScored: getStat('gf'),
          goalDifference: getStat('gd'),
          goalsLetIn: getStat('ga'),
          points: getStat('pts'),
        }
      }),
    }
  } catch (error) {
    console.error('Everysport standings error:', error)
    return null
  }
}
