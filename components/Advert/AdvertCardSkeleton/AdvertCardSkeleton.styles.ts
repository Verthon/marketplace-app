import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Theme } from 'styles/theme'

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.75;
  }
  10% {
    opacity: 0.80;
  }
  50% {
    opacity: 0.95;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 0.25rem 0;
  width: calc(50% - 4px);
`

const Image = styled.div`
  opacity: 0.75;
  background-color: ${({ theme }: {theme: Theme}) => theme.colors.grey[100]};
  align-items: center;
  height: 160px;
  animation: ${skeletonAnimation} 2.5s ease-in-out infinite forwards;
`

const Content = styled.div`
  padding: 8px 8px 0 8px;
`

const SkeletonTextSmall = styled.div`
  opacity: 0.75;
  width: 25%;
  height: 6px;
  border-radius: 3px;
  margin: 0 0 8px 0;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.grey[100]};
  animation: ${skeletonAnimation} 2.5s ease-in-out infinite forwards;
`

const SkeletonTextMedium = styled(SkeletonTextSmall)`
  width: 50%;
`

const SkeletonTextLarge = styled(SkeletonTextSmall)`
  width: 100%;
`

export const Styled = {
  Wrapper,
  Content,
  Image,
  SkeletonTextSmall,
  SkeletonTextMedium,
  SkeletonTextLarge
}
