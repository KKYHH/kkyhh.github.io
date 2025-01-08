import { graphql, PageProps } from 'gatsby'

export default function Index({
  data: {
    allContentfulBlog: { edges },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <div>
      {edges.map(({ node: { title, slug, date } }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexPage {
    allContentfulBlog(sort: { date: DESC }) {
      edges {
        node {
          title
          slug
          date
        }
      }
    }
  }
`
