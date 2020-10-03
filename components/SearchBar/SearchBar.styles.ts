import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const HomeWrapper = styled.div`
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.grey[50]};
  z-index: 1;
`

const SearchContent = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: ${({ theme }: { theme: Theme }) => theme.colors.grey[600]};
  padding: 1rem;
  border-radius: 2px;
  cursor: pointer;
`

export const Styled = {
  HomeWrapper,
  SearchContent
}
