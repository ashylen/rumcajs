import React from "react"

import Button from "components/atoms/Button"
import { StyledWrapper } from "./styles"
import Img from "gatsby-image"
import { Box } from "@material-ui/core"
import { Link } from "gatsby"

const Tile = ({ image, text, altText, link }) => {
  return (
    <StyledWrapper>
      <Link activeClassName="active" to={link} title={altText}>
        <Img alt={altText} fluid={image} />
        <Box
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          zIndex="10"
        >
          <Button color="secondary" isAbsolute size="big">
            {text}
          </Button>
        </Box>
      </Link>
    </StyledWrapper>
  )
}

export default Tile
