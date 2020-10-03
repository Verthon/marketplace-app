import React from 'react'
import Link from 'next/link'

import { Styled } from './Search.styles'

export const Search = () => {
  return (
    <Styled.Wrapper>
      <form noValidate>
        <Styled.InputWrapper>
          <Link href='/'><a><Styled.BackIcon src='/assets/icons/chevron_left_icon.svg'/></a></Link>
          <Styled.Input type="text" placeholder="Find something for you"/>
        </Styled.InputWrapper>
      </form>
      <img src='/assets/illustrations/search_illustration.svg' />
    </Styled.Wrapper>
  )
}
