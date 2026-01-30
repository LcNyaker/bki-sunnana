import GetCoaches from '@/app/components/cards/coach/GetCoaches'
import GetPlayers from '@/app/components/cards/player/GetPlayers'

const TeamsList = () => {
  return (
    <>
      <GetPlayers />
      <GetCoaches />
    </>
  )
}

export default TeamsList
