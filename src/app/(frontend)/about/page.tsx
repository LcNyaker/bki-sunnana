/* 
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/app/components/RenderBlocks'
import { Employees } from '@/app/components/Employees'

export default async function AboutPage() {
  const payload = await getPayload({ config })


  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'about',
      },
    },
    limit: 1,
  })

  const page = result.docs[0]


  if (!page) {
    return (
      <div className="home">
        <div className="content">
          <h1>page not found</h1>
        </div>
      </div>
    )
  }

  return (
    <main className="flex flex-col gap-20">
      {page.layout && page.layout.length > 0 ? <RenderBlocks layout={page.layout} /> : <div></div>}
      <Employees />
    </main>
  )
}
 */

/* import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretLeftIcon } from '@phosphor-icons/react/dist/ssr/CaretLeft'
import { Comments } from '@/app/components/Comments'
import { CommentForm } from '@/app/components/forms/CommentForm'

// TypeScript interface för params
interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Async Server Component
export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  const post = result.docs[0]

  const comments = await payload.find({
    collection: 'comments',
    where: {
      post: { equals: post.id },
    },
  })

  console.log('comments', comments)
  /* console.log(slug)
  console.log(result.docs) 

  return (
    <section className="px-4 bg-gray-900 pb-4">
      <h1 className="text-3xl font-bold text-amber-400 mt-20 pl-4">Posts</h1>
      {post && 0 ? (
        <p>Something went wrong</p>
      ) : (
        <div>
          <article
            key={post.id}
            className="w-full flex flex-col justify-between p-4 gap-6 items-center"
          >
            <div className="w-full">
              <h2 className="text-xl text-amber-400 min-h-10">{post.title}</h2>
              <i className="text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</i>
            </div>

            <section className="border flex flex-col lg:flex-row-reverse gap-10">
              {post.image && typeof post.image !== 'string' ? (
                <figure className="flex justify-center aspect-video flex-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  <Image
                    src={post.image.url ?? ''}
                    alt={post.image.alt}
                    width={post.image?.width as number}
                    height={post.image?.height as number}
                    className="rounded-xl object-cover"
                  />
                </figure>
              ) : (
                <p>No image</p>
              )}
              <div className="flex-1">
                <div className="text-white">{post.body && <RichText data={post.body} />}</div>
              </div>
            </section>
            <div className="flex justify-between w-full">
              <div className="flex flex-col w-full justify-between">
                <div className="flex gap-2">
                  <span>Author:</span>
                  <span className="text-amber-400">{post.author}</span>
                </div>
              </div>
              <Link
                href={`/posts`}
                className="flex justify-center text-amber-400 border rounded-lg whitespace-nowrap px-4 hover:bg-amber-400 hover:text-gray-900 animate-breathe"
              >
                <div className="flex items-center gap-2">
                  <CaretLeftIcon />
                  <span>Go back to posts</span>
                </div>
              </Link>
            </div>
          </article>
        </div>
      )}
      {!comments || comments.docs.length === 0 ? (
        <div className="italic p-4 text-gray-400">No comments yet...</div>
      ) : (
        comments.docs.map((c) => (
          <Comments
            key={c.id}
            authorName={c.authorName}
            content={c.content}
            createdAt={c.createdAt}
          />
        ))
      )}
      <section>
        <CommentForm postId={post.id} />
      </section>
    </section>
  )
}
 */
