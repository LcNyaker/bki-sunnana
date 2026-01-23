import { getSeriesTable } from '@/lib/getSeriesTable'
/* import Image from 'next/image' */

const SeriesTable = async () => {
  const table = await getSeriesTable()

  if (!table) {
    return (
      <article className="flex flex-col h-full">
        <div className="border-2 shadow-lg shadow-black/40 p-2">
          <p className="text-center py-4">Kunde inte hämta tabellen</p>
        </div>
      </article>
    )
  }

  return (
    <article className="flex flex-col h-full">
      <div className="flex flex-col h-full">
        <div className="overflow-y-auto border-2 shadow-lg shadow-black/40 p-2 h-full max-h-[600px]">
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={7} className="mb-2">
                  <div className="flex justify-between my-">
                    <h2 className="text-sm font-semibold">{table.leagueName}</h2>
                    <p className="text-sm opacity-70">{table.season}</p>
                  </div>
                </th>
              </tr>
              <tr>
                <th className="w-10 text-left">#</th>
                <th className="text-left">Lag</th>
                <th className="w-12 text-right">M</th>
                <th className="w-12 text-right">GM</th>
                <th className="w-12 text-right">MS</th>
                <th className="w-12 text-right">IM</th>
                <th className="w-12 text-right">P</th>
              </tr>
            </thead>
            <tbody>
              {table.standings.map((row) => (
                <tr key={row.position} className={row.position === 2 ? 'border-y-2' : ''}>
                  <td>{row.position}</td>
                  <td className="truncate pr-2 gap-2 flex ">{row.teamName}</td>
                  <td className="text-right font-semibold">{row.played}</td>
                  <td className="text-right">{row.goalScored}</td>
                  <td className="text-right font-semibold">{row.goalDifference}</td>
                  <td className="text-right">{row.goalsLetIn}</td>
                  <td className="text-right font-semibold">{row.points}</td>
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
