import styled from '@emotion/styled'

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: #ffffff;
`

const NavItem = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  svg {
    width: 20px;
    height: 20px;
  }
  cursor: pointer;
`

export const Styled = {
  Navbar,
  NavItem
}
