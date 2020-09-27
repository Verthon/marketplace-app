import React from 'react'
import { Category } from 'components/Category/Category'

import { Styled } from './CategoriesWrapper.styles'
import { Props } from './CategoriesWrapper.types'

export const CategoriesWrapper = ({ data }: Props) => {
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
          {data?.map(category => <Category key={category.id} category={category} />)}
        </Styled.List>
      </Styled.ListWrapper>
    </Styled.Section>
  )
}
