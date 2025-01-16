import styled from 'styled-components'

type PostBodyProps = {
  content: Queries.ContentfulBlog
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
  return (
    <Wrapper>
      <Content>
        <div id="content">{/* 렌더링된 게시글이 들어갈 자리 */}</div>
        {/* 댓글 컴포넌트가 들어갈 자리 */}
      </Content>
      {/* 플로팅 목차 컴포넌트가 들어갈 자리 */}
    </Wrapper>
  )
}
