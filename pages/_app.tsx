/* eslint-disable import/no-default-export */
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

import { theme } from '../styles/theme'

const myApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${emotionNormalize}
        html,
    body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: Helvetica, Arial, sans-serif;
        }
      `}
    />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default myApp
