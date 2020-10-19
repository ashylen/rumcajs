import React from "react"

// Modules
import { ThemeProvider } from "styled-components"
import { createGlobalStyle, keyframes } from "styled-components"
import { Reset } from "styled-reset"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { StylesProvider } from "@material-ui/core/styles"
import Nav from "components/molecules/Nav/Nav"

// Components
import Footer from "components/organisms/Footer/Footer"

const loading = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: visible;
    pointer-events: none;
  }
`

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    padding:0;

    &:after{
      content: '';
      top: 0;
      left:0;
      bottom:0;
      right:0;
      background-color: #222;
      animation: ${loading} 1s both;
      z-index: 10;
      position: fixed;
    }
  }

  *, *:after, *:before{
    box-sizing: border-box;
  }
`

export const theme = createMuiTheme({
  direction: "ltr",
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 600,
      fontSize: "40px",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "30px",
    },
    h3: {
      fontWeight: 500,
      fontSize: "25px",
    },
    h4: {
      fontWeight: 500,
      fontSize: "20px",
    },
    body2: {
      fontWeight: 500,
      fontSize: "24px",
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#CF2B27", // red
    },
    secondary: {
      main: "#00b0ff", // blue
    },
  },
})

const HomeTemplate = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StylesProvider>
          <Reset />
          <GlobalStyle />
          <Nav>{children}</Nav>
          <Footer />
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default HomeTemplate
