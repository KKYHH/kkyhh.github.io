import { PageProps, graphql } from 'gatsby'

export default function Post({ data }: PageProps<Queries.PostPageQuery>) {
  return (
    <div>
      <div>{data.contentfulBlog?.title}</div>
      <div>{data.contentfulBlog?.date}</div>
      <div>{data.contentfulBlog?.slug}</div>
    </div>
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date
      slug
    }
  }
`
