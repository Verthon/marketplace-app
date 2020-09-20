import React from 'react'
import { Icon } from '@chakra-ui/core'

import { Styled } from './Navbar.styles'

export const Navbar = () => {
  return (
    <Styled.Navbar>
      <Styled.NavItem>
        <Icon name="triangle-up" />
        Home
      </Styled.NavItem>
      <Styled.NavItem>
        <Icon name="star" />
        Favourites
      </Styled.NavItem>
      <Styled.NavItem>
        <Icon name="plus-square" />
        Add
      </Styled.NavItem>
      <Styled.NavItem>
        <Icon name="bell" />
        Account
      </Styled.NavItem>
    </Styled.Navbar>
  )
}
