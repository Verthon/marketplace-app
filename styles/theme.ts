import { keyframes } from '@emotion/core'

const skeletonAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

export const theme = {
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  animations: {
    skeleton: `${skeletonAnimation} 1s ease infinite`
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem'
  },
  colors: {
    grey: {
      50: '#f9f9fb',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d'
    },
    green: {
      50: '#e5ffec',
      100: '#b8fecf',
      200: '#89feb6',
      300: '#5dfea2',
      400: '#3dfe94',
      500: '#30e584',
      600: '#24b271',
      700: '#197f58',
      800: '#0a4c3b',
      900: '#001a17'
    }
  }
}

export type Theme = typeof theme;
