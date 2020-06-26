import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AppBar } from "@material-ui/core"

export const StyledScrollToTop = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`

export const StyledAppBar = styled(AppBar)`
  background-color: transparent;
`

export const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 0;
  margin: 0 15px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  color: #fff;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: transparent;
    bottom: 0;
    left: 0;
    transition: background-color 0.3s;
  }

  &:hover,
  &.active {
    color: #f9e242;

    &:after {
      background: #f9e242;
    }
  }

  @media (max-width: 992px) {
    padding: 20px 0;
    font-size: 1.3rem;
    margin: 0 8px;
  }
`
