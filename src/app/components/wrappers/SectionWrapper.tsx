import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
  return <section className={`section-wrapper ${className}`}>{children}</section>
}

export default SectionWrapper
