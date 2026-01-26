export type TeamStanding = {
  position: number
  teamName: string
  teamLogo: string | null
  played: number
  wins: number
  draws: number
  losses: number
  goalScored: number
  goalDifference: number
  goalsLetIn: number
  points: number
}

export type SeriesTable = {
  leagueName: string
  season: string
  standings: TeamStanding[]
}
