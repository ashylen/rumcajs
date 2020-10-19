import React from "react"

import { Typography } from "@material-ui/core"
import { StyledSectionTitle } from "./styles"

const SectionTitle = ({ subtitle, children }) => {
  return (
    <>
      <Typography variant="h1" component={StyledSectionTitle} color="primary">
        {children}
      </Typography>
      {subtitle && <Typography variant="h5">{subtitle}</Typography>}
    </>
  )
}

export default SectionTitle
