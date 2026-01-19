type HotspotButtonProps = {
  x: number
  y: number
  onHover: () => void
}

const HotspotButton = ({ x, y, onHover }: HotspotButtonProps) => {
  return (
    <button
      className="absolute h-12 w-12 rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={onHover}
      aria-label="Spot Button for viewing players through the team image"
    />
  )
}

export default HotspotButton
