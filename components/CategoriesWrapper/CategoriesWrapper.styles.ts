import styled from '@emotion/styled'

import { Theme } from '../../styles/theme'

const Section = styled.section`
  background-color: #ffffff;
  margin: 1rem 0;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`

const Title = styled.h2`
color: ${({ theme }: { theme: Theme }) => theme.colors.grey[900]};
margin: 0;
font-size: 20px;
line-height: 22px;
font-weight: 500;
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
`

const AllCategories = styled.a`
  color: #7F9799;
margin: 0;
font-size: 14px;
line-height: 18px;
cursor: pointer;
`

const ListWrapper = styled.div`
    padding: 24px 16px;
    max-width: 100%;
    overflow-x: scroll;
    width: auto;
`
const List = styled.ul`
display: inline-grid;
grid-auto-flow: column;
grid-gap: 8px;
list-style: none;
margin: 0;
padding: 0;
background-color: #FFFFFF;
`

export const Styled = {
  Section,
  Header,
  Title,
  AllCategories,
  ListWrapper,
  List
}
