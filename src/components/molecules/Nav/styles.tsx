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
    box-shadow: 0 0 20px -4px black;
  }

  @media (min-width: 1023px) {
    & button {
      opacity: 0;
    }
  }

  ${({ isHome }) =>
    isHome &&
    css`
      @media (min-width: 1023px) {
        width: 70vw;
      }
      left: 50%;
      transform: translateX(-50%);

      & > div {
        background-color: ${({ theme }) => theme.palette.primary.main};
        position: relative;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;

        &:before {
          content: "";
          position: absolute;
          left: -63px;
          top: 0;
          z-index: 2;
          height: 100%;
          border-top: solid 32px ${({ theme }) => theme.palette.primary.main};
          border-right: solid 32px ${({ theme }) => theme.palette.primary.main};
          border-left: solid 32px transparent;
          border-bottom: solid 32px transparent;

          @media (max-width: 1024px) {
            display: none;
          }
        }

        &:after {
          content: "";
          position: absolute;
          right: -63px;
          top: 0;
          z-index: 2;
          height: 100%;
          border-right: solid 32px transparent;
          border-top: solid 32px ${({ theme }) => theme.palette.primary.main};
          border-left: solid 32px ${({ theme }) => theme.palette.primary.main};
          border-bottom: solid 32px transparent;

          @media (max-width: 1024px) {
            display: none;
          }
        }
      }
    `}

  ${({ changeColor }) =>
    !changeColor &&
    css`
      box-shadow: none;
    `};
`
