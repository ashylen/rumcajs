import React, { useRef } from "react"

import { Button } from "@material-ui/core"

// Modules
import styled, { keyframes } from "styled-components"

// Utils
import { phoneNumber } from "utils/constants"

// Components
import HomeBackgroundImage from "components/simple/BackgroundImage/BackgroundImage"
import HomeTemplate from "templates/HomeTemplate"
import ContactBannerView from "views/ContactBannerView"
import AboutUsView from "views/AboutUsView"
import CostsView from "views/CostsView"
import SEO from "components/seo"

// @TODO Popracowac nad SEO, poprawic TAGI H1, dodać podstronki typu "Pomoc drogowa Rzeszow itp" pod seo,

const StyledTopWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: rgba(255, 169, 34, 0.85);
  color: #fff;
  min-height: calc(100vh - 56px);
  text-align: center;

  @media (max-width: 992px) {
    background: #f9e242;
  }
`

const StyledSectionWrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    margin: 10% auto auto;
  }
`

const IndexPage = () => {
  return (
    <HomeTemplate>
      <SEO isHome title="Rumcajs" />
      <StyledTopWrapper>
        <HomeBackgroundImage>
          <StyledSectionWrapper>
            <h1>Wycieczki</h1>
            <h2>Bliskie i dalekie</h2>
            <p>Wybierz się z nami!</p>
          </StyledSectionWrapper>
        </HomeBackgroundImage>
      </StyledTopWrapper>

      <AboutUsView />
      <CostsView />

      <ContactBannerView />
    </HomeTemplate>
  )
}

export default IndexPage
