'use client'

import { useRouter } from 'next/navigation'
import Button from './Button'
import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr'

type BackButtonProps = {
  fallbackHref?: string
  fallTo?: string
}

const BackButton = ({ fallbackHref, fallTo }: BackButtonProps) => {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else if (fallbackHref) {
      router.push(fallbackHref)
    }
  }

  return (
    <Button variant="secondary" className="flex gap-2" onClick={handleBack}>
      <ArrowLeftIcon />
      Tillbaka{fallTo && ` till ${fallTo}`}
    </Button>
  )
}

export default BackButton
