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
    if (fallbackHref) {
      router.push(fallbackHref)
    } else if (window.history.length > 1) {
      router.back()
    }
  }

  return (
    <Button
      ariaLabel="Gå tillbaka"
      variant="secondary"
      className="flex items-center justify-center gap-2 w-full text-sm md:text-base"
      onClick={handleBack}
    >
      <ArrowLeftIcon className="flex-shrink-0" />
      <span className="truncate">Tillbaka{fallTo && ` till ${fallTo}`}</span>
    </Button>
  )
}

export default BackButton
