import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.li`
  background-color: transparent;
  margin: 0 0.25rem;
`

const Content = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const IconContainer = styled.div`
  background-color: ${({ theme }: {theme: Theme}) => theme.colors.grey[100]};
  height: 75px;
  width: 75px;
  border-radius: 10px;
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
