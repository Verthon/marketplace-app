import {Global, css} from '@emotion/core';
import {ColorModeProvider, CSSReset, ThemeProvider} from '@chakra-ui/core';
import React from 'react';

import '../styles/globals.css'

const myApp = ({Component, pageProps}) => (
        <ThemeProvider>
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
);

export default myApp