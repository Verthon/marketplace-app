import React from 'react'

import { SearchBar } from './SearchBar'
import { ContainerProps } from './SearchBar.types'

export const SearchBarContainer = ({ fake }: ContainerProps) => {
  const handleSubmit = () => {

  }
  return (
    <SearchBar onSubmit={handleSubmit} fake={fake} />
  )
}
