'use client'

import { useState } from 'react'

const SeriesTable = () => {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men')

  const mensTable = [
    ['1', 'Lag A', '8', '91', '24'],
    ['2', 'Lag B', '7', '32', '15'],
    ['3', 'Lag C', '8', '-24', '13'],
    ['4', 'Lag D', '8', '-3', '12'],
    ['5', 'Lag E', '8', '-15', '12'],
    ['6', 'Lag F', '8', '-9', '9'],
    ['7', 'Lag G', '7', '5', '6'],
    ['8', 'Lag H', '8', '-77', '1'],
  ]

  const womensTable = [
    ['1', 'Munkfors IBK', '11', '63', '31'],
    ['2', 'Hertzöga BK', '11', '42', '26'],
    ['3', 'Kristinehamns IBF', '11', '24', '26'],
    ['4', 'Åmåls IBK / Billingsfors IBK', '10', '19', '25'],
    ['5', 'Skattkärrs IK', '11', '34', '18'],
    ['6', 'Säffle IBF', '10', '-11', '13'],
    ['7', 'SK Örnen', '11', '-10', '11'],
    ['8', 'Dotteviks IF U', '11', '-58', '6'],
    ['9', 'BKI Sunnanå', '11', '-51', '3'],
    ['10', 'Hultsberg IBF', '11', '-52', '0'],
  ]

  const tableData = activeTab === 'men' ? mensTable : womensTable

  return (
    <article className="flex flex-col h-full">
      <div className="flex flex-col h-full">
        <div className="flex font-bold">
          <button
            onClick={() => setActiveTab('men')}
            className={`text-lg p-2 ${activeTab === 'men' ? '' : 'opacity-50 hover:text-black hover:opacity-100'}`}
          >
            Herrar
          </button>

          <button
            onClick={() => setActiveTab('women')}
            className={`text-lg px-2 ${activeTab === 'women' ? '' : 'opacity-50 hover:text-black hover:opacity-100'}`}
          >
            Damer
          </button>
        </div>
        <div className="flex-1 overflow-y-auto border-2 shadow-lg shadow-black/40 p-2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-10 text-left">#</th>
                <th className="text-left">Lag</th>
                <th className="w-12 text-right">M</th>
                <th className="w-16 text-right hidden md:table-cell">-/+</th>
                <th className="w-12 text-right">P</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map(([pos, team, m, diff, p]) => (
                <tr key={pos} className=" first:border-b [&:nth-child(2)]:border-b">
                  <td>{pos}</td>
                  <td className="truncate pr-2">{team}</td>
                  <td className="text-right">{m}</td>
                  <td className="text-right hidden md:table-cell">{diff}</td>
                  <td className="text-right font-semibold">{p}</td>
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
