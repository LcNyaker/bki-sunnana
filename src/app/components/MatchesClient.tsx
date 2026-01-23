'use client'

import { useState } from 'react'
import Image from 'next/image'
import NextMatchDisplay from './displays/matches/NextMatchDisplay'
import LatestMatchDisplay from './displays/matches/LatestMatchDisplay'
import type { NextMatch } from '@/types/ui/next-match'
import type { LatestMatch } from '@/types/ui/latest-match'
import type { SeriesTable as SeriesTableType } from '@/types/ui/series-table'
import SeriesTable2 from './tables/SerisTable2'

type MatchesClientProps = {
  upcomingMatches: NextMatch[] | null
  finishedMatches: LatestMatch[] | null
  seriesTable: SeriesTableType | null
}

const MatchesClient = ({ upcomingMatches, finishedMatches, seriesTable }: MatchesClientProps) => {
  const [activeView, setActiveView] = useState<'upcoming' | 'finished'>('upcoming')

  const nextMatch = upcomingMatches?.[0]
  const latestMatch = finishedMatches?.[0]
  const futureMatches = upcomingMatches?.slice(1) || []
  const pastMatches = finishedMatches?.slice(1) || []

  return (
    <>
      {/* Huvudtabs som styr hela vyn */}
      <div className="w-full section-wrapper mt-10">
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => setActiveView('upcoming')}
            className={`text-2xl font-bold py-1 transition-opacity ${
              activeView === 'upcoming' ? 'underline' : 'opacity-50 hover:opacity-100'
            }`}
          >
            Kommande
          </button>
          <button
            onClick={() => setActiveView('finished')}
            className={`text-2xl font-bold py-1 transition-opacity ${
              activeView === 'finished' ? '' : 'opacity-50 hover:opacity-100'
            }`}
          >
            Resultat
          </button>
        </div>
      </div>

      <section className="w-full grid grid-cols-1 items-stretch lg:grid-cols-5 gap-10 section-wrapper lg:gap-6">
        <div className="lg:col-span-3 flex flex-col">
          <h2 className="text-xl title-accent font-bold py-1 mb-2">
            {activeView === 'upcoming' ? 'Nästa match' : 'Senaste match'}
          </h2>

          {activeView === 'upcoming' && nextMatch && <NextMatchDisplay match={nextMatch} />}
          {activeView === 'upcoming' && !nextMatch && (
            <div className="border-2 shadow-lg shadow-black/40 p-4">
              <p className="text-center">Inga kommande matcher</p>
            </div>
          )}

          {activeView === 'finished' && latestMatch && <LatestMatchDisplay match={latestMatch} />}
          {activeView === 'finished' && !latestMatch && (
            <div className="border-2 shadow-lg shadow-black/40 p-4">
              <p className="text-center">Inga spelade matcher</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 flex flex-col h-full">
          <h2 className="text-xl title-accent font-bold py-1 mb-2">Tabell</h2>
          {seriesTable ? (
            <SeriesTable2 table={seriesTable} />
          ) : (
            <div className="border-2 shadow-lg shadow-black/40 p-4">
              <p className="text-center">Kunde inte hämta tabellen</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Section: Kommande matcher eller Spelade matcher */}
      <section className="w-full section-wrapper mt-20">
        <h3 className="title-accent text-xl font-bold py-1 mb-4">
          {activeView === 'upcoming' ? 'Kommande matcher' : 'Spelade matcher'}
        </h3>

        {/* Kommande matcher */}
        {activeView === 'upcoming' && futureMatches.length > 0 && (
          <ul>
            {futureMatches.map((match, index) => {
              const matchDate = new Date(match.startDate)
              const shortDate = matchDate.toLocaleDateString('sv-SE', {
                day: 'numeric',
                month: 'numeric',
              })
              return (
                <li
                  key={`${match.round}-${index}`}
                  className="border-2 shadow-md shadow-black/40 overflow-hidden mb-4"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4 text-sm opacity-70">
                      <span>{shortDate}</span>
                      <span>Omgång {match.round}</span>
                    </div>
                    <div className="grid grid-row-[1fr_50px_1fr] sm:grid-cols-[1fr_50px_1fr] mb-5">
                      <div className="flex items-center justify-center sm:justify-end gap-2">
                        {match.homeTeam.logo && (
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <Image
                              src={match.homeTeam.logo}
                              alt={match.homeTeam.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="font-semibold truncate">{match.homeTeam.name}</span>
                      </div>

                      <span className="text-lg font-bold text-center">–</span>

                      <div className="flex flex-row-reverse sm:flex-row items-center justify-center sm:justify-start gap-2 flex-1">
                        <span className="font-semibold truncate">{match.awayTeam.name}</span>
                        {match.awayTeam.logo && (
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <Image
                              src={match.awayTeam.logo}
                              alt={match.awayTeam.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}

        {/* Spelade matcher */}
        {activeView === 'finished' && pastMatches.length > 0 && (
          <ul>
            {pastMatches.map((match, index) => (
              <li
                key={`${match.round}-${index}`}
                className="border-2 shadow-md shadow-black/40 overflow-hidden mb-4"
              >
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4 text-sm opacity-70">
                    <span>Omgång {match.round}</span>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                    <div className="flex flex-col items-center justify-end gap-2">
                      {match.homeTeam.logo && (
                        <div className="relative w-8 h-8 flex-shrink-0">
                          <Image
                            src={match.homeTeam.logo}
                            alt={match.homeTeam.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="font-semibold truncate">{match.homeTeam.name}</span>
                    </div>

                    <div className="flex items-center gap-3 text-2xl font-bold">
                      <span>{match.homeTeam.score}</span>
                      <span>–</span>
                      <span>{match.awayTeam.score}</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      {match.awayTeam.logo && (
                        <div className="relative w-8 h-8 flex-shrink-0">
                          <Image
                            src={match.awayTeam.logo}
                            alt={match.awayTeam.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="font-semibold truncate">{match.awayTeam.name}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Tomma tillstånd */}
        {activeView === 'upcoming' && futureMatches.length === 0 && (
          <p className="text-center opacity-70">Inga fler kommande matcher</p>
        )}
        {activeView === 'finished' && pastMatches.length === 0 && (
          <p className="text-center opacity-70">Inga spelade matcher</p>
        )}
      </section>
    </>
  )
}

export default MatchesClient
