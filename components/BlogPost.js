import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
        <article key={post.id} className="mb-10 md:mb-12 px-2 py-8 md:p-12 md:border md:border-gray-400">
          <header className="flex flex-col justify-between text-black text-center">
            <time className="text-xl mb-2 font-mono">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </header>
          <main>
            <h2 className="text-2xl mb-2 font-title text-center leading-10">
              {post.titleen}
            </h2>
            <div className='p-2 md:p-4 my-4 flex justify-center align-center bg-white'>
              <iframe
                src={post.image}
                width="100%"
                height={550}
              />
            </div>
            <p className="leading-8 text-gray-900 dark:text-gray-300">
              {post.summary}
            </p>
            <p className="leading-8 text-gray-900 dark:text-gray-300">
              {post.summarytw}
            </p>
            <p className="mt-6 text-center">
              <Link href={`${BLOG.path}/${post.slug}`}>
                <button className='bg-gray-800 hover:bg-gray-600 text-white mx-2 py-1 px-3 rounded-full'>
                    More
                </button>
              </Link>
            </p>
          </main>
        </article>
  )
}

export default BlogPost
