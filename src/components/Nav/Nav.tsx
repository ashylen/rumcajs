import React from "react"

import PropTypes from "prop-types"
import {
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
  Slide,
  Fab,
  Zoom,
} from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import HomeIcon from "@material-ui/icons/Home"
import { StyledLink, StyledScrollToTop, StyledAppBar } from "./styles"

const ScrollTop = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <Zoom in={trigger}>
      <StyledScrollToTop onClick={handleClick} role="presentation">
        {children}
      </StyledScrollToTop>
    </Zoom>
  )
}

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Nav = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <StyledAppBar>
          <Toolbar>
            <Box display="flex" justifyContent="center" width="100%">
              <StyledLink activeClassName="active" to="/" alt="Strona główna">
                <HomeIcon />
              </StyledLink>
              <StyledLink activeClassName="active" to="/kontakt/" alt="Kontakt">
                Kontakt
              </StyledLink>
              <StyledLink
                activeClassName="active"
                to="/polityka-prywatnosci/"
                alt="Oferta"
              >
                Wycieczki
              </StyledLink>
              <StyledLink
                activeClassName="active"
                to="/regulamin-serwisu/"
                alt="Cennik"
              >
                Cennik
              </StyledLink>
            </Box>
          </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
      <div id="back-to-top-anchor"></div>
      <main>{children}</main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default Nav
