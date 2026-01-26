import { FloorballIcon } from '@/app/assets/Icons/FloorballIcon'
import type { SeriesTable } from '@/types/everysport/ui/series-table'
import Image from 'next/image'

type SeriesTableProps = {
  table: SeriesTable
}

const SeriesTable = ({ table }: SeriesTableProps) => {
  return (
    <article className="flex flex-col max-w-[348px]:">
      <div className="flex flex-col h-full">
        <div className="overflow-y-auto border-2 shadow-lg shadow-black/40 p-2 h-full">
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={7}>
                  <div className="flex justify-between my-1">
                    <h2 className="text-sm font-semibold">{table.leagueName}</h2>
                    <p className="text-sm opacity-70">{table.season}</p>
                  </div>
                </th>
              </tr>
              <tr>
                <th className="w-10 text-left">#</th>
                <th className="text-left">Lag</th>
                <th className="w-12 text-right pr-2">M</th>
                <th className="w-12 text-right pr-2">GM</th>
                <th className="w-12 text-right hidden sm:table-cell pr-2">+/-</th>
                <th className="w-12 text-right pr-2">IM</th>
                <th className="w-12 text-right pr-2">P</th>
              </tr>
            </thead>
            <tbody>
              {table.standings.map((row) => (
                <tr key={row.position} className={row.position === 2 ? 'border-y-2' : ''}>
                  <td className="py-1">{row.position}</td>
                  <td className="truncate pr-2">
                    <div className="flex items-center">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        {row.teamLogo ? (
                          <Image
                            src={row.teamLogo}
                            alt={row.teamName}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div>
                            <FloorballIcon size={24} />
                          </div>
                        )}
                      </div>

                      <span className="truncate pl-2">{row.teamName}</span>
                    </div>
                  </td>
                  <td className="text-right pr-2">{row.played}</td>
                  <td className="text-right pr-2">{row.goalScored}</td>
                  <td className="text-right hidden sm:table-cell pr-2">
                    {row.goalDifference > 0 ? '+' : ''}
                    {row.goalDifference}
                  </td>
                  <td className="text-right pr-2">{row.goalsLetIn}</td>
                  <td className="text-right font-semibold pr-2">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  )
}

export default SeriesTable
