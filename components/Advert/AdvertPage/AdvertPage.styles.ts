import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 0.25rem 0;
  width: calc(50% - 4px);
`

const ImageContainer = styled.div`
  max-height: 240px;
`

const Image = styled.img`
  opacity: 0.75;
  background-color: ${({ theme }: {theme: Theme}) => theme.colors.grey[100]};
  align-items: center;
  max-width: 100%;
  height: auto;
`

const Date = styled.p`
 color: ${({ theme }: {theme: Theme}) => theme.colors.grey[600]};
`

export const Styled = {
  Wrapper,
  Image,
  ImageContainer,
  Date
}
