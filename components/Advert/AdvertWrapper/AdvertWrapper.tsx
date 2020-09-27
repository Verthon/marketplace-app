import React from 'react'

import { AdvertCardSkeleton } from '../AdvertCardSkeleton/AdvertCardSkeleton'

import { Styled } from './AdvertWrapper.styles'
import { Props } from './AdvertWrapper.types'

export const AdvertWrapper = ({ loading }: Props) => {
  const renderSkeletons = () => {
    const data = []
    for (let i = 0; i < 10; i++) {
      data.push(<AdvertCardSkeleton key={i} />)
    }
    return data
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>Latest adverts</Styled.Title>
      <Styled.AdvertsList>{loading ? renderSkeletons() : null}</Styled.AdvertsList>
    </Styled.Wrapper>
  )
}
