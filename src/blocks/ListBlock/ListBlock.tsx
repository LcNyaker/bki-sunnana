import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

type Post = {
  id: string
  title: string
  content: string
  createdAt: string
  slug: string
}

type ListBlockProps = {
  title?: string
  limit?: number
}

async function fetchLatestPosts(limit = 3) {
  const res = await fetch(`http://localhost:3000/api/posts?limit=${limit}&sort=-createdAt`, {
    cache: 'no-store',
  })
  const data = await res.json()
  return data.docs
}

export const ListBlock = async ({ title, limit = 3 }: ListBlockProps) => {
  const posts = await fetchLatestPosts(limit)

  return (
    <section id="preview" className="bg-gray-900 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.content}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="flex gap-2 items-center p-1 border rounded-md hover:bg-yellow-300 text-amber-400"
                  >
                    Read more
                    <ArrowRightIcon size={20} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
