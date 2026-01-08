import React from 'react'
import Image from 'next/image'
import type { BannerBlockType } from '@/types/blocks'

export const BannerBlock = ({ title, body, image }: BannerBlockType) => {
  return (
    <section className="relative w-full h-[500px] mt-40 overflow-hidden">
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || title || 'Banner image'}
          fill
          sizes="100vw"
          className="object-cover object-bottom brightness-75"
          priority
        />
      )}

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight whitespace-nowrap">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{body}</p>
      </div>
    </section>
  )
}
