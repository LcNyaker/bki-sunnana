import { ReactNode } from 'react'

type AnimatedFrameProps = {
  children: ReactNode
  className?: string
}

const AnimatedFrame = ({ children, className = '' }: AnimatedFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="animated-frame w-full h-full">
        <div className="frame-content">{children}</div>
      </div>
    </div>
  )
}

export default AnimatedFrame
