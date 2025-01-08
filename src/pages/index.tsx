import { graphql, PageProps } from 'gatsby'

export default function Index({
  data: {
    allContentfulBlog: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <>
      {nodes.map(({ title, slug, date }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  query IndexPage {
    allContentfulBlog(sort: { date: DESC }) {
      nodes {
        title
        slug
        date
      }
    }
  }
`
