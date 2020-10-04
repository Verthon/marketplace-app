/* eslint-disable import/no-default-export */
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MainWrapper } from 'components/MainWrapper/MainWrapper'
import { Navbar } from 'components/Navbar/Navbar'

function Home () {
  const router = useRouter()
  const { id } = router.query
  return (
    <MainWrapper>
      <Head>
        <title>Mrkt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Test id: {id}</h1>
      <Navbar />
    </MainWrapper>
  )
}

export default Home
