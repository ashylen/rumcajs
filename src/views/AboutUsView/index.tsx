import React from "react"

// Components
import { StyledSectionInfo } from "./styles"
import { Typography, Box } from "@material-ui/core"

const AboutUsView: React.FC = () => (
  <StyledSectionInfo>
    <Box textAlign="center">
      <Typography variant="h1" component="h2" color="primary">
        O NAS
      </Typography>
      <Typography variant="h5">doświadczenie procentuje</Typography>

      <br />
      <br />

      <Typography>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
      </Typography>
      <br />
      <br />
    </Box>
  </StyledSectionInfo>
)

export default AboutUsView
