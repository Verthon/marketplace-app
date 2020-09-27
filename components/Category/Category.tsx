import React from 'react'

import { Styled } from './Category.styles'
import { Props } from './Category.types'

export const Category = ({ category }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.IconContainer />
        <Styled.CategoryDescription>{category.name}</Styled.CategoryDescription>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
