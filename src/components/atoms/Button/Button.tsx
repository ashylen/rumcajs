import React from "react"

import { StyledButton } from "./styles"

const Button = ({ children, color, isAbsolute, size }) => {
  return (
    <StyledButton color={color} size={size} isAbsolute={isAbsolute}>
      {children}
    </StyledButton>
  )
}

export default Button
