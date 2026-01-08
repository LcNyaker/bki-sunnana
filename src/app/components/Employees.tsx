import React from 'react'
import Image from 'next/image'
import { Employee } from '@/payload-types'
import { QuotesIcon, PencilIcon } from '@phosphor-icons/react/dist/ssr'

async function fetchTeam() {
  const res = await fetch(`http://localhost:3000/api/employees`, {
    cache: 'no-store',
  })
  const data = await res.json()
  return data.docs
}

export const Employees = async () => {
  const employees = await fetchTeam()

  console.log(employees)

  return (
    <div className="w-full px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
      {employees.reverse().map((e: Employee) => (
        <div
          key={e.id}
          className="relative group w-full aspect-square overflow-hidden rounded-lg shadow-lg"
        >
          {e.image && typeof e.image !== 'string' ? (
            <Image
              src={e.image.url ?? ''}
              alt={e.image.alt}
              fill
              className="object-cover object-center"
              loading="eager"
            />
          ) : (
            <p>No image</p>
          )}

          <div className="absolute inset-0 bg-opacity-0 hover:bg-gray-400/60 group-hover:bg-opacity-60 transition duration-300 w-full h-full flex items-center justify-center">
            <blockquote className="opacity-0 group-hover:opacity-100 transition duration-300 px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-center flex flex-col items-center gap-2">
              <QuotesIcon weight="fill" className="self-start text-2xl" />
              <p className="text-2xl sm:text-xs xl:text-base">{e.introduktion}</p>
              <QuotesIcon weight="fill" className="self-end rotate-180 text-2xl" />
            </blockquote>
          </div>

          <div className="group-hover:hidden absolute top-4 left-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white z-10">
            <div className="flex gap-1 ">
              <h2 className="text-xl font-bold">{e.forname}</h2>
              <h2 className="text-xl font-bold">{e.lastname}</h2>
            </div>
            <h3 className="text-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{e.position}</h3>
          </div>
        </div>
      ))}
      <section className="relative group shadow-lg   last:col-span-full 2xl:last:col-start-3 2xl:last:col-span-2 2xl:text-center 2xl:flex 2xl:justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        <div className="p-10 w-full flex flex-col bg-amber-400 group-hover:bg-gray-700 rounded-lg text-black justify-around ">
          <h3 className="text-xl font-bold relative z-2 group-hover:text-white">
            Are you curios and want to join the team?
          </h3>
          <p className="text-md relative z-2 group-hover:text-white  hover:text-amber-400">
            contact us!
          </p>
        </div>
        <PencilIcon
          weight="fill"
          className="absolute top-1/2 -translate-y-1/2 right-0 z-1  group-hover:text-gray-900 text-amber-500 text-9xl 2xl:text-[400px] "
        />
      </section>
    </div>
  )
}
