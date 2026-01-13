/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState } from 'react'

interface CommentFormProps {
  postId: string
}

export const CommentForm = ({ postId }: CommentFormProps) => {
  const [authorName, setAuthorName] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post: postId, authorName, content }),
      })

      if (res.ok) {
        setStatus('Comment Added')
        setAuthorName('')
        setContent('')
        setTimeout(() => {
          window.location.reload()
        }, 500)
      } else {
        setStatus('Something went wrong, try again')
      }
    } catch (error) {
      setStatus('Something went wrong, try again')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col center-item gap-2 p-4">
      <div>
        <label htmlFor="comment">Feedback:</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          required
          className="text-black rounded min-h-20 bg-gray-200 w-full p-2"
          id="comment"
          value={content}
        />
      </div>
      <div className="pt-2 flex justify-between items-end">
        <div className="w-30">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            onChange={(e) => setAuthorName(e.target.value)}
            required
            id="author"
            value={authorName}
            className="rounded bg-gray-200 text-black w-full"
          />
        </div>
        <button type="submit" className="hover:text-amber-400 cursor-pointer">
          Add Comment
        </button>
      </div>
      {status && <p className="text-center text-amber-400">{status}</p>}
    </form>
  )
}
