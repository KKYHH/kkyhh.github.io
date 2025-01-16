import { useEffect } from 'react'
import styled from 'styled-components'
import useRenderRichText from '../../hooks/useRenderRichText'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import Comment from './Comment'

type PostBodyProps = {
  content: string | null | undefined
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 100px;
`

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  font-size: 16px;
  line-height: 2;
  word-break: break-word;
`

export default function PostBody({ content }: PostBodyProps) {
  const richTextContent = useRenderRichText(content)

  useEffect(Prism.highlightAll, [])

  return (
    <Wrapper>
      <Content>
        <div id="content">{richTextContent}</div>
        <Comment />
      </Content>
      {/* 플로팅 목차 컴포넌트가 들어갈 자리 */}
    </Wrapper>
  )
}
