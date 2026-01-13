import React from 'react'

const OverviewTable = () => {
  return (
    <article className="bg-black text-white p-4 h-full">
      <h3 className="text-lg font-bold mb-4 border-b-2">Tabell</h3>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left">
            <th>#</th>
            <th>Lag</th>
            <th>M</th>
            <th>V</th>
            <th>O</th>
            <th>F</th>
            <th className="hidden md:table-cell">GM</th>
            <th className="hidden md:table-cell">IM</th>
            <th className="hidden md:table-cell">MS</th>
            <th>P</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b-2">
            <td>1</td>
            <td>Lag A</td>
            <td>8</td>
            <td>8</td>
            <td>0</td>
            <td>0</td>
            <td className="hidden md:table-cell">110</td>
            <td className="hidden md:table-cell">19</td>
            <td className="hidden md:table-cell">91</td>
            <td>24</td>
          </tr>

          <tr className="border-b-2">
            <td>2</td>
            <td>Lag B</td>
            <td>7</td>
            <td>5</td>
            <td>0</td>
            <td>2</td>
            <td className="hidden md:table-cell">68</td>
            <td className="hidden md:table-cell">36</td>
            <td className="hidden md:table-cell">32</td>
            <td>15</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Lag C</td>
            <td>8</td>
            <td>4</td>
            <td>1</td>
            <td>3</td>
            <td className="hidden md:table-cell">46</td>
            <td className="hidden md:table-cell">70</td>
            <td className="hidden md:table-cell">-24</td>
            <td>13</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Lag D</td>
            <td>8</td>
            <td>4</td>
            <td>0</td>
            <td>4</td>
            <td className="hidden md:table-cell">45</td>
            <td className="hidden md:table-cell">48</td>
            <td className="hidden md:table-cell">-3</td>
            <td>12</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Lag E</td>
            <td>8</td>
            <td>4</td>
            <td>0</td>
            <td>4</td>
            <td className="hidden md:table-cell">65</td>
            <td className="hidden md:table-cell">80</td>
            <td className="hidden md:table-cell">-15</td>
            <td>12</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Lag F</td>
            <td>8</td>
            <td>3</td>
            <td>0</td>
            <td>5</td>
            <td className="hidden md:table-cell">61</td>
            <td className="hidden md:table-cell">70</td>
            <td className="hidden md:table-cell">-9</td>
            <td>9</td>
          </tr>

          <tr>
            <td>7</td>
            <td>Lag G</td>
            <td>7</td>
            <td>2</td>
            <td>0</td>
            <td>5</td>
            <td className="hidden md:table-cell">39</td>
            <td className="hidden md:table-cell">34</td>
            <td className="hidden md:table-cell">5</td>
            <td>6</td>
          </tr>

          <tr>
            <td>8</td>
            <td>Lag H</td>
            <td>8</td>
            <td>0</td>
            <td>1</td>
            <td>7</td>
            <td className="hidden md:table-cell">25</td>
            <td className="hidden md:table-cell">102</td>
            <td className="hidden md:table-cell">-77</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </article>
  )
}

export default OverviewTable
