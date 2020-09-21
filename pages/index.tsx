/* eslint-disable import/no-default-export */
import React from 'react'
import Head from 'next/head'

import { Navbar } from '../components/Navbar/Navbar'

function Home () {
  return (
    <div>
      <Head>
        <title>Mrkt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
