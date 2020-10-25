import styled, { css } from "styled-components"
import { Button } from "@material-ui/core"

export const StyledButton = styled(Button)`
  font-size: 20px;

  ${({ isAbsolute }) =>
    isAbsolute &&
    css`
      position: absolute;
      height: 100%;
      width: 100%;
    `}

  ${({ size }) =>
    size == "big" &&
    css`
      font-size: 30px;

      @media (max-width: 540px) {
        font-size: 22px;
      }
    `}
`
