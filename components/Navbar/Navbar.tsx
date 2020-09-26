import React from 'react'

import { Styled } from './Navbar.styles'

export const Navbar = () => {
  return (
    <Styled.Navbar>
      <Styled.NavItem>
        Home
      </Styled.NavItem>
      <Styled.NavItem>
        Favourites
      </Styled.NavItem>
      <Styled.NavItem>
        Add
      </Styled.NavItem>
      <Styled.NavItem>
        Account
      </Styled.NavItem>
    </Styled.Navbar>
  )
}
