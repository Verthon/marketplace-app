import React from 'react'

import { CategoriesWrapper } from './CategoriesWrapper'

export const CategoriesWrapperContainer = () => {
  const data = [
    {
      id: 1,
      name: 'Automotive'
    },
    {
      id: 3,
      name: 'Garden'
    },
    {
      id: 4,
      name: 'House'
    },
    {
      id: 5,
      name: 'Fashion'
    },
    {
      id: 6,
      name: 'Electronics'
    },
    {
      id: 7,
      name: 'Animals'
    },
    {
      id: 8,
      name: 'Sport'
    },
    {
      id: 2,
      name: 'Jobs'
    },
    {
      id: 9,
      name: 'Agriculture'
    }
  ]
  return <CategoriesWrapper data={data} />
}
