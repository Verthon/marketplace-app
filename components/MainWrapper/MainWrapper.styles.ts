import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.main`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.grey[50]};
`

export const Styled = {
  Wrapper
}
