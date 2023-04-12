// src/theme.ts
import { createTheme } from '@mui/material/styles'
import { convertToRem } from '~/utils/styleUtils'

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 4.5
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2
  },
  typography: {
    allVariants: {
      fontFamily: 'Pretendard',
      fontSize: convertToRem(14),
      fontWeight: 400,
      color: '#070707',
      lineHeight: convertToRem(20),
      letterSpacing: 0
    }
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  transitions: {
    // Define transitions here
  }
})

export default theme
