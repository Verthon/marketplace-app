import React from 'react'

import { Styled } from './Search.styles'

export const Search = () => {
  return (
    <Styled.Wrapper>
      <form noValidate>
        <Styled.InputWrapper>
          <Styled.Input type="text" placeholder="Find something for you"/>
        </Styled.InputWrapper>
      </form>
    </Styled.Wrapper>
  )
}
