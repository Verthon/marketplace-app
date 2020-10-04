import React from 'react'

import { Styled } from './AdvertPage.styles'
import { Props } from './AdvertPage.types'

export const AdvertPage = ({ loading, error, advert }: Props) => {
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <Styled.ImageContainer>
        <Styled.Image src={advert?.images[0]} alt="" />
      </Styled.ImageContainer>
    </div>
  )
}
