import React from 'react'
import Link from 'next/link'

import { Route } from '../../routing/routes'

import { Props } from './SearchBar.types'
import { Styled } from './SearchBar.styles'

export const SearchBar = ({ fake, onSubmit }: Props) => {
  if (fake) {
    return (
      <Styled.HomeWrapper>
        <Link href={Route.search}>
          <Styled.SearchContent>Find something for you</Styled.SearchContent>
        </Link>
      </Styled.HomeWrapper>
    )
  }

  return <form></form>
}
