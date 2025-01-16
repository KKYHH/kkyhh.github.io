import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'

const options: Options = {}

export default function useRenderRichText(raw: string | null | undefined) {
  if (!raw) return null
  return renderRichText({ raw }, options)
}
