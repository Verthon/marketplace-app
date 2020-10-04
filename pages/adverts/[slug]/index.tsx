/* eslint-disable import/no-default-export */
import React from 'react'
import Head from 'next/head'
import { MainWrapper } from 'components/MainWrapper/MainWrapper'
import { Navbar } from 'components/Navbar/Navbar'
import { AdvertPageContainer } from 'components/Advert/AdvertPage/AdvertPageContainer'

function Advert () {
  return (
    <MainWrapper>
      <Head>
        <title>Mrkt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdvertPageContainer/>
      <Navbar />
    </MainWrapper>
  )
}

export default Advert
