import React from "react"

// Modules
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { StylesProvider } from "@material-ui/core/styles"
import Nav from "components/molecules/Nav/Nav"
import theme from "utils/theme"

// Components
import Footer from "components/organisms/Footer/Footer"

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    padding:0;

  }

  *, *:after, *:before{
    box-sizing: border-box;
  }
`

const MainTemplate = ({ children }) => {
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

export default MainTemplate
