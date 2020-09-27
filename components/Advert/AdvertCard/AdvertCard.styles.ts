import styled from '@emotion/styled'
import { Theme } from 'styles/theme'

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  max-width: 50%;
`

const AdvertLink = styled.a`
  display: block;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
`

const Image = styled.img`
  object-fit: cover;
  opacity: 1;
  width: 100%;
  height: 100%;
`

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.grey[100]};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;
  background-color: #ffffff;
  flex: 1 0 auto;
  position: relative;
  padding: 8px;
  min-height: 112px;
`

const Title = styled.p`
  color: ${({ theme }: { theme: Theme }) => theme.colors.grey[800]};
  margin: 0 0 auto 0;
  margin-right: 24px;
  font-size: 14px;
  line-height: 18px;
  line-clamp: 2;
  box-orient: vertical;
  overflow: hidden;
`

const Price = styled.p`
  color: ${({ theme }: { theme: Theme }) => theme.colors.grey[800]};
  margin: 4px 0 0 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Styled = {
  Wrapper,
  AdvertLink,
  InnerWrapper,
  ImageWrapper,
  Image,
  ImagePlaceholder,
  Content,
  Title,
  Price
}
