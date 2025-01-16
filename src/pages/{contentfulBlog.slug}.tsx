import { PageProps, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostHead from '../components/post/PostHead'
import PostBody from '../components/post/PostBody'

export default function Post({
  data: { contentfulBlog },
}: PageProps<Queries.PostPageQuery>) {
  return (
    <>
      <PostHead
        title={contentfulBlog?.title as string}
        category={contentfulBlog?.category as string[]}
        date={contentfulBlog?.date as string}
        thumbnail={
          contentfulBlog?.thumbnail?.gatsbyImageData as IGatsbyImageData
        }
      />
      <PostBody content={contentfulBlog?.content?.raw} />
    </>
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      thumbnail {
        gatsbyImageData(width: 1000)
      }
      category
      date
      content {
        raw
      }
    }
  }
`
