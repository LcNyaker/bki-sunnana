import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Link from 'next/link'

export default async function PostList() {
  const payload = await getPayload({ config })

  // Fetch all guides
  const posts = await payload.find({
    collection: 'posts',
    limit: 100,
    /* sort: '-createdAt', // Newest first */
  })

  /* console.log(posts.docs) */
  return (
    <section className="px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-amber-400 mt-20 pl-4">Posts</h2>
      {posts.docs.length === 0 ? (
        <p>Something went wrong</p>
      ) : (
        <div className="grid grid-cols-2">
          {posts.docs.map((post) => (
            <article
              key={post.id}
              className="w-full flex flex-col justify-between p-4 gap-6 items-center"
            >
              <div className="w-full">
                <h3 className="text-xl text-amber-400 min-h-10">{post.title}</h3>
              </div>
              <div>
                <div className="text-white">{post.body && <RichText data={post.body} />}</div>
              </div>
              {post.image && typeof post.image !== 'string' ? (
                <figure className="flex justify-center w-full h-56 rounded-xl overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  <Image
                    src={post.image.url ?? ''}
                    alt={post.image.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </figure>
              ) : (
                <p>No image</p>
              )}
              <div className="flex justify-between w-full">
                <div className="flex flex-col w-full justify-between">
                  <i className="text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</i>
                  <span>{post.author}</span>
                </div>
                <Link
                  href={`/posts/${post.slug}`}
                  className="flex justify-center items-center text-amber-400 border rounded-lg whitespace-nowrap px-4 hover:bg-amber-400 hover:text-gray-900 animate-breathe"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
