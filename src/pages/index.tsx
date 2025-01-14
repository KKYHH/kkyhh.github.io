import { useState } from 'react'
import { graphql, PageProps } from 'gatsby'
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
        category
        slug
        date
      }
    }
  }
`
