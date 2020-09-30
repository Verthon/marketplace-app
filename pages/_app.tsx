/* eslint-disable import/no-default-export */
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { ApolloProvider } from '@apollo/client'
import { globalStyles } from 'styles/global'

import { useApollo } from '../lib/apolloClient'
import { theme } from '../styles/theme'

const myApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Global
          styles={globalStyles}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default myApp
