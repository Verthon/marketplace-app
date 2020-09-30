import React from 'react'
import { Category } from 'components/Category/Category'

import { Styled } from './CategoriesWrapper.styles'
import { Props } from './CategoriesWrapper.types'

export const CategoriesWrapper = ({ categories }: Props) => {
  return (
    <Styled.Section>
      <Styled.Header>
        <Styled.Title>Categories</Styled.Title>
        <Styled.AllCategories>
          See all categories
        </Styled.AllCategories>
      </Styled.Header>
      <Styled.ListWrapper>
        <Styled.List>
          {categories ? categories?.map(category => <Category key={category.id} category={category} />) : null}
        </Styled.List>
      </Styled.ListWrapper>
    </Styled.Section>
  )
}
