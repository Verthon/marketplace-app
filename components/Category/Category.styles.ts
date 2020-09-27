import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.li`
  background-color: transparent;
`

const Content = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const IconContainer = styled.div`
  background-color: ${({ theme }: {theme: Theme}) => theme.colors.grey[200]};
  height: 95px;
  width: 95px;
  border-radius: 25%;
`

const CategoryDescription = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Styled = {
  Wrapper,
  Content,
  IconContainer,
  CategoryDescription
}
