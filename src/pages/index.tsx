import { useState } from 'react'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Introduction from '../components/main/Introduction'
import Category from '../components/main/Category'

export default function Index({
  data: {
    allContentfulBlog: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = nodes.reduce<Record<string, number>>(
    (categories, post) => {
      post.category
        ?.filter((category): category is string => !!category)
        .forEach(
          category => (categories[category] = (categories[category] ?? 0) + 1),
        )

      return categories
    },
    { All: nodes.length },
  )

  const posts = nodes.filter(
    ({ category }) =>
      selectedCategory === 'All' || category?.includes(selectedCategory),
  )

  const handleSelectCategory = (category: string) =>
    setSelectedCategory(category)

  return (
    <>
      <Introduction />
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelect={handleSelectCategory}
      />
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 40 }}
      >
        {posts.map(({ title, slug, date, thumbnail, description }) => (
          <div key={slug}>
            <GatsbyImage
              image={thumbnail?.gatsbyImageData as IGatsbyImageData}
              alt={title as string}
            />
            <div>
              {title} / {date} / {slug}
            </div>
            <div>{description?.description}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  query IndexPage {
    allContentfulBlog(sort: { date: DESC }) {
      nodes {
        title
        category
        slug
        date
        thumbnail {
          gatsbyImageData(width: 500)
        }
        description {
          description
        }
      }
    }
  }
`
