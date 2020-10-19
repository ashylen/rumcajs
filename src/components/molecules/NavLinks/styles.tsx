import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 0;
  margin: 0 15px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 600;

  &.active {
    &:before {
      content: "";
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      height: 2px;
    }
    ${({ isHome }) =>
      isHome
        ? css`
            &:before {
              background-color: ${({ theme }) => theme.palette.common.white};
            }
          `
        : css`
            &:before {
              background-color: ${({ theme }) => theme.palette.common.white};
            }
          `}

    cursor: default;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const StyledLogoLink = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 auto 0 15px;
  text-decoration: none;
  position: relative;

  @media (max-width: 1024px) {
    padding: 5px 0;
  }
`
