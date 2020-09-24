import React from 'react'

import { Styled } from './CategoriesWrapper.styles'

export const CategoriesWrapper = () => {
  return (
    <Styled.Section>
      <Styled.Header>
        <Styled.Title>Categories</Styled.Title>
        <Styled.AllCategories>
          See all categories
        </Styled.AllCategories>
      </Styled.Header>
    </Styled.Section>
  )
}
