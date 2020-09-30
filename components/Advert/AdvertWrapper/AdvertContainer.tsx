import { gql, useQuery } from '@apollo/client'
import React from 'react'

import { AdvertWrapper } from './AdvertWrapper'

export const AdvertContainer = () => {
  const GET_ADVERTS = gql`
    query getAdverts {
      advert(order_by: {created_at: asc}) {
        id
        images
        title
        url
        voivodeship
        status
        salary
        price_negotiable
        price_currency
        priceValue
        activated_at
        category_id
        contact_city
        contact_name
        contact_phone_number
        created_at
        description
        external_url
      }
    }
  `
  const { data, loading } = useQuery(GET_ADVERTS)
  return (
    <AdvertWrapper loading={loading} adverts={data?.advert}/>
  )
}
