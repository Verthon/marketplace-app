import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

import { AdvertPage } from './AdvertPage'

export const AdvertPageContainer = () => {
  const router = useRouter()
  const { slug } = router.query
  const GET_ADVERT = gql`
    query getAdvert {
      advert(where: {id: {_eq: ${slug}}}) {
        id
        created_at
        description
        images
        priceValue
        price_currency
        price_negotiable
        title
        voivodeship
        url
        status
        salary
        contact_city
        category_id
        contact_name
        contact_phone_number
      }
    }
  `
  const { data, loading, error } = useQuery(GET_ADVERT)
  console.log(data?.advert[0])
  return <AdvertPage advert={data?.advert[0]} loading={loading} error={error} />
}
