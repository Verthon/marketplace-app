import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`

const Title = styled.h2`
  color: ${({ theme }: { theme: Theme }) => theme.colors.grey[900]};
  font-size: 20px;
`

const AdvertsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Styled = {
  Wrapper,
  Title,
  AdvertsList
}
