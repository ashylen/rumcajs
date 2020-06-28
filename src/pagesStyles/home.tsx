import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HomeBackgroundImage from "components/simple/BackgroundImage/BackgroundImage"

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
  color: #fff;
  z-index: 2;
  @media (max-width: 992px) {
    background: #f9e242;
  }
`

export const StyledText = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 25vh auto 0;
  position: relative;
  z-index: 2;
  font-weight: 600;
`

export const StyledFirstWord = styled.h1`
  display: flex;
  font-size: 10rem;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    font-size: 5rem;
  }
`

export const StyledSecondWord = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 4rem;

  @media (max-width: 1023px) {
    font-size: 2rem;
  }
`

export const StyledThirdWord = styled.span`
  display: flex;
  font-size: 2rem;
  justify-content: center;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 1rem;
  }
`

export const StyledBackgroundSection = styled(HomeBackgroundImage)`
  width: 100%;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
`

export const StyledSkew = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`
