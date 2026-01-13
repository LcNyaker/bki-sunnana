import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { TestBlockType } from '@/types/blocks'

export const TestBlock = ({ title, body, image, layout, button }: TestBlockType) => {
  // Standardvärden om layout inte är definierat
  const contentAlignment = layout?.contentAlignment || 'left'
  const height = layout?.height || 'medium'
  const overlayIntensity = layout?.overlayIntensity || 'medium'

  // Mapping av höjd till Tailwind-klasser
  const heightClasses = {
    small: 'h-[400px]',
    medium: 'h-[500px]',
    large: 'h-[600px]',
    xlarge: 'h-[700px]',
  }

  // Mapping av alignment till Tailwind-klasser
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center ',
    right: 'items-end text-right',
  }

  // Mapping av innehållsposition
  const contentPositionClasses = {
    left: 'justify-start',
    center: 'justify-start items-center',
    right: 'justify-start items-end',
  }

  // Mapping av overlay-intensitet
  const overlayClasses = {
    light: 'bg-gradient-to-r from-black/30 via-black/15 to-transparent',
    medium: 'bg-gradient-to-r from-black/70 via-black/40 to-transparent',
    dark: 'bg-gradient-to-r from-black/90 via-black/60 to-transparent',
    none: '',
  }

  // Knapp-stilar
  const buttonStyleClasses = {
    primary:
      ' text-amber-400 border hover:text-white rounded-lg whitespace-nowrap px-4 hover:bg-amber-400 hover:text-gray-900 hover:animate-breathe',
    secondary: 'bg-white text-black hover:bg-gray-200 animate-breathe',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black animate-breathe',
  }

  // Max-width baserat på alignment
  const maxWidthClass = contentAlignment === 'center' ? 'max-w-4xl' : 'max-w-2xl'

  const ButtonComponent = () => {
    if (!button?.showButton || !button?.buttonText) return null

    const buttonClass = `px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
      buttonStyleClasses[button.buttonStyle || 'primary']
    }`

    const buttonContent = <span className={buttonClass}>{button.buttonText}</span>

    if (button.buttonLink) {
      return (
        <Link href={button.buttonLink} className="inline-block">
          {buttonContent}
        </Link>
      )
    }

    return <button className={buttonClass}>{button.buttonText}</button>
  }

  return (
    <section className={`relative w-full mt-20 ${heightClasses[height]} overflow-hidden`}>
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || title || 'Banner image'}
          fill
          sizes="100vw"
          className="object-cover object-center brightness-75"
          priority
        />
      )}

      {overlayIntensity !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlayIntensity]}`} />
      )}

      <div
        className={`relative z-10 flex flex-col ${contentPositionClasses[contentAlignment]} h-full pt-10 px-10 md:px-20 text-white`}
      >
        <div
          className={`${alignmentClasses[contentAlignment]} ${maxWidthClass} flex flex-col gap-4`}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h2>

          {body && <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{body}</p>}

          {button?.showButton && button?.buttonPosition === 'below' && (
            <div className="mt-4">
              <ButtonComponent />
            </div>
          )}

          {button?.showButton && button?.buttonPosition === 'inline' && (
            <div
              className={`flex ${
                contentAlignment === 'center'
                  ? 'justify-center'
                  : contentAlignment === 'right'
                    ? 'justify-end'
                    : 'justify-start'
              } gap-4 flex-wrap items-center mt-2`}
            >
              <ButtonComponent />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
