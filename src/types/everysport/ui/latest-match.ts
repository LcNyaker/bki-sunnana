export type LatestMatch = {
  round: number
  leagueName: string

  homeTeam: {
    name: string
    logo: string | null
    score: number
  }

  awayTeam: {
    name: string
    logo: string | null
    score: number
  }
}
