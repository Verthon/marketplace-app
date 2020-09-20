import React from 'react'
import Head from 'next/head'
import { Navbar } from '../components/Navbar/Navbar'

export function Home () {
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
