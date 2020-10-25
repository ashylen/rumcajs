import { createMuiTheme } from "@material-ui/core"

export default createMuiTheme({
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
      main: "#CF2B27",
    },
    secondary: {
      main: "#fff",
    },
  },
})
