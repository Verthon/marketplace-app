import React from 'react'

import { Styled } from './MainWrapper.styles'
import { Props } from './MainWrapper.types'

export const MainWrapper = ({ children }: Props) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>
}
