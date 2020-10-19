import React from "react"
import styled from "styled-components"
import AppBar from "@material-ui/core/AppBar"
import { Link } from "gatsby"
import { Drawer, List } from "@material-ui/core"

export const StyledAppBar = styled(AppBar)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.palette.common.white};
  color: #3d4451;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  padding: 0;
`

export const StyledNavWrapper = styled("div")`
  justify-content: space-between;
  height: 115px;
  flex-wrap: wrap;
  max-width: 1520px;
  margin: 0 auto;
  width: 90%;
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.common.black};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: 1em;
  padding: 4px 20px;
  border-radius: 9px;
  margin-right: 26px;

  &:hover {
    background: none;
  }
  &:last-child {
    margin-right: 0;
    padding-right: 0;
  }
`

export const StyledNavDrawer = styled.nav`
  ${props => props.theme.breakpoints.up("sm")} {
    width: 300px;
    /* zmienic 300px na zmienna */
    flex-shrink: 0;
  }
`

export const StyledDrawer = styled(Drawer)`
  & > div[class*="Drawer"] {
    background-color: ${({ theme }) => theme.palette.primary.main};
    width: 300px;
  }
  /* zmienic 300px na zmienna */
`

export const StyledList = styled(List)`
  height: 100%;
  display: flex;
  flex-flow: column;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};

  li {
    height: 71px;
    display: flex;
  }

  a.active {
    background-color: #ac0505;
  }
`

export const StyledLogoLink = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  position: relative;

  @media (max-width: 599px) {
    padding: 10px 0 4px;
  }
`
