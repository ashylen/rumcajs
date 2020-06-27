import React from "react"

import PropTypes from "prop-types"
import {
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Box,
  Fade,
  Fab,
  Zoom,
} from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import HomeIcon from "@material-ui/icons/Home"
import { StyledScrollToTop, StyledAppBar } from "./styles"
import NavLinks from "../NavLinks/NavLinks"

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
    <Fade appear={false} direction="down" in={!trigger}>
      {children}
    </Fade>
  )
}

const Nav = ({ children, ...props }) => {
  const scrolled = useScrollTrigger({
    threshold: 200,
    disableHysteresis: true,
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <StyledAppBar>
          <Toolbar>
            <Box display="flex" justifyContent="center" width="100%">
              <NavLinks scrolled={scrolled} />
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
