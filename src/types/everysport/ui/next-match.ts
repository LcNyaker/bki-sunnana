export type NextMatch = {
  round: number
  leagueName: string
  startDate: string

  arena: {
    name: string
  } | null

  homeTeam: {
    name: string
    logo: string | null
  }

  awayTeam: {
    name: string
    logo: string | null
  }
}
