import React from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  ariaLabel?: string
}

const baseClasses = `
  inline-flex items-center justify-center
  px-6 py-3
  font-medium
  rounded-md
  transition-all duration-200
  disabled:opacity-50
  disabled:cursor-not-allowed
`

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--black)]
    text-[var(--white)]
    hover:bg-[var(--white)]
    hover:text-[var(--black)]
    hover:font-bold
    hover:scale-110
    active:translate-y-0
    border-2 
    border-black
  `,
  secondary: `
    border border-[var(--secondary-500)]
    text-[var(--black)]
    bg-transparent
    hover:bg-[var(--secondary-500)]
    hover:font-bold
    active:translate-y-0
  `,
}

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
}: ButtonProps) => {
  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button
