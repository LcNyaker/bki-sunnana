export type EverysportStat = {
  name: string
  value: string
}

export type EverysportTeam = {
  name: string
}

export type EverysportStanding = {
  position: number
  team: EverysportTeam
  stats: EverysportStat[]
}

export type EverysportStandingsResponse = {
  league: {
    name: string
  }
  groups: {
    standings: EverysportStanding[]
  }[]
}
