import React from "react"
import styled, { css } from "styled-components"
import { AppBar } from "@material-ui/core"

export const StyledScrollToTop = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`

const HomeNavColor = "rgba(0, 0, 0, 0.6)"
const MainNavColor = "#000"

export const StyledAppBar = styled(AppBar)`
  background-color: transparent;

  & > div {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ isHome }) =>
    isHome &&
    css`
      width: auto;
      left: 50%;
      transform: translateX(-50%);

      & > div {
        background-color: ${HomeNavColor};
        position: relative;

        &:before {
          content: "";
          position: absolute;
          left: -64px;
          top: 0;
          z-index: 2;
          height: 100%;
          border-top: solid 32px ${HomeNavColor};
          border-right: solid 32px ${HomeNavColor};
          border-left: solid 32px transparent;
          border-bottom: solid 32px transparent;
        }

        &:after {
          content: "";
          position: absolute;
          right: -64px;
          top: 0;
          z-index: 2;
          height: 100%;
          border-right: solid 32px transparent;
          border-top: solid 32px ${HomeNavColor};
          border-left: solid 32px ${HomeNavColor};
          border-bottom: solid 32px transparent;
        }
      }
    `}

  ${({ changeColor }) =>
    !changeColor &&
    css`
      box-shadow: none;
    `};
`
