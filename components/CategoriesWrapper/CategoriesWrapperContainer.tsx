import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { CategoriesWrapper } from './CategoriesWrapper'

export const CategoriesWrapperContainer = () => {
  const GET_CATEGORIES = gql`
    query MyQuery {
      categories {
        big_image_url
        id
        image_url
        name
      }
    }
  `
  const { data } = useQuery(GET_CATEGORIES)

  return <CategoriesWrapper categories={data?.categories} />
}
