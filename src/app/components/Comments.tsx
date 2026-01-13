import { UserIcon } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export interface Comment {
  authorName: string
  content: string
  createdAt: string
}

export const Comments = ({ authorName, content, createdAt }: Comment) => {
  return (
    <div className="flex italic flex-col gap-2 p-4 border-b-2 text-gray-200 bg-gray-800">
      <div className="flex justify-between items-center">
        <div className="border items-center flex gap-2">
          <UserIcon className=" text-amber-400" />
          <h3 className="">{authorName} : </h3>
        </div>
        <span className="text-gray-400">{new Date(createdAt).toLocaleDateString('sv-SE')}</span>
      </div>
      <div>
        <p className=" text-amber-400">{content}</p>
      </div>
    </div>
  )
}
