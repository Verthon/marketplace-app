import React from 'react'

import { AdvertCard } from '../AdvertCard/AdvertCard'
import { AdvertCardSkeleton } from '../AdvertCardSkeleton/AdvertCardSkeleton'

import { Styled } from './AdvertWrapper.styles'
import { Props } from './AdvertWrapper.types'

export const AdvertWrapper = ({ loading, adverts }: Props) => {
  const renderSkeletons = () => {
    const data = []
    for (let i = 0; i < 10; i++) {
      data.push(<AdvertCardSkeleton key={i} />)
    }
    return data
  }

  const renderAdverts = () => {
    return adverts?.map(advert => {
      return <AdvertCard key={advert.id} advert={advert} />
    })
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>Latest adverts</Styled.Title>
      <Styled.AdvertsList>{loading ? renderSkeletons() : renderAdverts()}</Styled.AdvertsList>
    </Styled.Wrapper>
  )
}
