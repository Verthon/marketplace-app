import React from 'react'
import dayjs from 'dayjs'

import { Styled } from './AdvertCard.styles'
import { Props } from './AdvertCard.types'

export const AdvertCard = ({ advert }: Props) => {
  const hasNoImages = !advert.images || advert.images.length
  const href = advert.id ? `/adverts/${advert.id}` : '/'

  return (
    <Styled.Wrapper>
      <Styled.AdvertLink href={href}>
        <Styled.InnerWrapper>
          <Styled.ImageWrapper>
            {hasNoImages ? <Styled.ImagePlaceholder /> : <Styled.Image src={advert.images[0]} />}
          </Styled.ImageWrapper>
          <Styled.Content>
            <div>
              <Styled.Title>{advert.title}</Styled.Title>
              <Styled.Price>{advert.priceValue}</Styled.Price>
            </div>
            <div>
              <Styled.Location>{advert.contact_city}</Styled.Location>
              <Styled.Date>{dayjs(advert.created_at).format('DD MMMM YYYY')}</Styled.Date>
            </div>
          </Styled.Content>
        </Styled.InnerWrapper>
      </Styled.AdvertLink>
    </Styled.Wrapper>
  )
}
