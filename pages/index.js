import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Mas from '@/components/Mas'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, 3)
  const totalPosts = posts.length
  const showNext = totalPosts > 1
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext }) => {
  console.log(postsToShow[0])
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Mas title="An inforgraph a day opens your mind on key issues"/>
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}

export default blog
