/* eslint-disable import/no-default-export */
import React from 'react'
import Head from 'next/head'

import { Navbar } from '../components/Navbar/Navbar'
import { SearchBarContainer } from '../components/SearchBar/SearchBarContainer'
import { MainWrapper } from '../components/MainWrapper/MainWrapper'
import { CategoriesWrapper } from '../components/CategoriesWrapper/CategoriesWrapper'

function Home () {
  return (
    <MainWrapper>
      <Head>
        <title>Mrkt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBarContainer fake />
      <CategoriesWrapper></CategoriesWrapper>
      <Navbar />
    </MainWrapper>
  )
}

export default Home
