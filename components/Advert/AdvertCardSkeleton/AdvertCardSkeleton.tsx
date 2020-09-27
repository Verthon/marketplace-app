import React from 'react'

import { Styled } from './AdvertCardSkeleton.styles'

export const AdvertCardSkeleton = () => {
  return (
    <Styled.Wrapper>
      <Styled.Image/>
      <Styled.Content>
        <Styled.SkeletonTextSmall />
        <Styled.SkeletonTextLarge />
        <Styled.SkeletonTextMedium />
      </Styled.Content>
    </Styled.Wrapper>
  )
}
