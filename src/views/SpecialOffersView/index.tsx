import React from "react"

// Components
import { StyledSectionInfo } from "./styles"
import { Typography, Box } from "@material-ui/core"

const SpecialOffers: React.FC = () => (
  <StyledSectionInfo>
    <Box textAlign="center">
      <Typography variant="h1" component="h2" color="primary">
        OFERTY SPECJALNE
      </Typography>
      <Typography variant="h5">zapoznaj się z Naszymi nowościami</Typography>
    </Box>
  </StyledSectionInfo>
)

export default SpecialOffers
