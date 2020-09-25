/* eslint-disable import/no-default-export */
import React from 'react'
import { Global, css } from '@emotion/core'
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core'

import { customTheme } from '../styles/theme'

const myApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={customTheme}>
    <ColorModeProvider value="light">
      <CSSReset />
      <Global
        styles={css`
          #__next {
            height: 100%;
          }
        `}
      />
      <Component {...pageProps} />
    </ColorModeProvider>
  </ThemeProvider>
)

export default myApp
