import React, { useState } from 'react'

import { Styled } from './Navbar.styles'

export const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const handleScroll = () => {
    console.log('handler')
    setIsNavbarVisible(false)
  }
  if (isNavbarVisible) {
    return (
      <Styled.Navbar onScroll={handleScroll}>
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
  return <div></div>
}
