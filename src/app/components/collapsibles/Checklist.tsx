'use client'

import { CaretRightIcon } from '@phosphor-icons/react'
import React, { useState } from 'react'

type ChecklistItem = {
  title: string
  items: {
    title: string
    id?: string | null
  }[]
  id?: string | null
}

interface ChecklistProps {
  checklist?: ChecklistItem[] | null
}

export const Checklist = ({ checklist }: ChecklistProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: checked,
    }))
  }

  const calculateStats = () => {
    let totalChecked = 0
    let totalItems = 0

    checklist?.forEach((section) => {
      section.items.forEach((item) => {
        totalItems++
        if (item.id && checkedItems[item.id]) {
          totalChecked++
        }
      })
    })

    return { totalChecked, totalItems }
  }

  const { totalChecked, totalItems } = calculateStats()

  const resetChecklist = () => {
    setCheckedItems({})
  }

  console.log('Checklist data:', checklist)

  return (
    <>
      {checklist && checklist.length > 0 && (
        <div className="flex items-start">
          <button
            onClick={() => toggleMenu()}
            className="hover:breathe flex flex-row-reverse cursor-pointer hover:text-amber-400"
          >
            <h3>Essential Packing</h3>
            <CaretRightIcon
              size={40}
              className={`transition-transform duration-200  ${isOpen ? '' : 'rotate-180'}`}
            />
          </button>
          <aside
            className={`bg-gray-900 border-t-2 border-l-2 rounded-tl-2xl border-amber-400 overflow-hidden flex flex-col gap-4 
    ${isOpen ? 'transition-all duration-700 ease-in-out p-4 max-w-screen' : 'max-h-0 max-w-0 p-0 border-none'}`}
          >
            <h3>Checklist</h3>
            {checklist.map((section) => (
              <div key={section.id} className="mb-3">
                <h5 className="font-semibold mb-1">{section.title}</h5>
                {section.items.map((item) => (
                  <div className="flex gap-2 items-baseline" key={item.id}>
                    <input
                      id={`checkbox-${item.id}`}
                      type="checkbox"
                      checked={item.id ? checkedItems[item.id] || false : false}
                      onChange={(e) => {
                        if (item.id) {
                          handleCheckboxChange(item.id, e.target.checked)
                        }
                      }}
                    />
                    <label htmlFor={`checkbox-${item.id}`}>{item.title}</label>
                  </div>
                ))}
              </div>
            ))}

            <p>
              Progress:{' '}
              <span>
                {totalChecked} / {totalItems}
              </span>
            </p>
            {totalChecked > 0 && (
              <button className="p-1 border rounded-md" onClick={() => resetChecklist()}>
                Reset
              </button>
            )}
          </aside>
        </div>
      )}
    </>
  )
}
