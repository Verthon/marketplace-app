import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.grey[50]};
  padding: 0 16px;
`

const InputWrapper = styled.div`
  margin: 16px 0 0 0;
 position: relative;
`

const Input = styled.input`
  font-size: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.grey[800]};
  width: 100%;padding: 14px 48px;
  line-height: 20px;
  border: 0;
`

export const Styled = {
  Wrapper,
  InputWrapper,
  Input
}
