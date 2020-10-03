import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.div`
  display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    min-height: calc( (var(--vh,1vh) * 100) - 0px );
  position: relative;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.grey[50]};
  padding: 0 16px;
`

const InputWrapper = styled.div`
  margin: 16px 0 0 0;
 position: relative;
`

const BackIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  margin: -12px 0 0 12px;
  top: 50%;
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
  Input,
  BackIcon
}
