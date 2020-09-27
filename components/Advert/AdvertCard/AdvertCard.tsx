import React from 'react'

import { Styled } from './AdvertCard.styles'
import { Props } from './AdvertCard.types'

export const AdvertCard = ({ advert }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.AdvertLink>
        <Styled.InnerWrapper>
          <Styled.ImageWrapper>
            {!advert.images || advert.images.length === 0 ? (
              <Styled.ImagePlaceholder />
            ) : (
              <Styled.Image src={advert.images[0]} />
            )}
          </Styled.ImageWrapper>
          <Styled.Content>
            <div>
              <Styled.Title>{advert.title}</Styled.Title>
              <Styled.Price>{advert.priceValue}</Styled.Price>
            </div>
          </Styled.Content>
        </Styled.InnerWrapper>
      </Styled.AdvertLink>
    </Styled.Wrapper>
  )
}
