import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const Title = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`

const Menu = styled.div`
  display: flex;
  gap: 15px;
  font-size: 25px;

  & > a {
    display: flex;
    color: initial;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <Title to="/">Developer K</Title>

      <Menu>
        <a href="https://github.com/KKYHH" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/kyhh__" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a href="#" target="_blank">
          <AiFillLinkedin />
        </a>
      </Menu>
    </Wrapper>
  )
}
