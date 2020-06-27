import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledWrapper = styled.div<{ scrolled?: boolean }>`
  display: flex;
`

export const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 0;
  margin: 0 15px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  color: #000;

  &:hover {
    color: #000;
  }

  @media (max-width: 992px) {
    padding: 20px 0;
    font-size: 1.3rem;
    margin: 0 8px;
  }
`
