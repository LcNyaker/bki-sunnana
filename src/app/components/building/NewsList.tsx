import React from 'react'
import Button from '../buttons/Button'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'

const NewsList = () => {
  return (
    <section className="section-wrapper">
      <ul className="mt-10">
        <li className="flex relative items-center gap-4 border p-4 rounded-md shadow-lg shadow-black/40">
          <div>
            <span>8/11</span>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-xl mb-2">Rubrik för nyheten</h2>
            <div className="space-y-1 text-md text-gray-600">
              <p>
                En liten text om nyheten för användaren och om de vill så kan de läsa mer om detta
                här, men bara om de vill.
              </p>
            </div>
          </div>
          <div>
            <Button>
              Läs mer
              <ArrowRightIcon size={16} className="ml-2" />
            </Button>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default NewsList
