import React from "react"

// Components
import HomeTemplate from "templates/HomeTemplate"
import SEO from "components/seo"
import SpecialOffersView from "views/SpecialOffersView"
import AboutUsView from "views/AboutUsView"

import {
  StyledWrapper,
  StyledText,
  StyledFirstWord,
  StyledSecondWord,
  StyledThirdWord,
  StyledBackgroundSection,
  StyledSkew,
} from "pagesStyles/home"

const IndexPage: React.FC = () => {
  return (
    <HomeTemplate>
      <SEO isHome title="Rumcajs - strona główna" />
      <StyledWrapper>
        <StyledBackgroundSection>
          <StyledSkew />
          <StyledText>
            <StyledFirstWord>WYCIECZKI</StyledFirstWord>
            <StyledSecondWord>BLISKIE I DALEKIE</StyledSecondWord>
            <StyledThirdWord>Wybierz się z nami!</StyledThirdWord>
          </StyledText>
        </StyledBackgroundSection>
      </StyledWrapper>
      <SpecialOffersView />
      <AboutUsView />
    </HomeTemplate>
  )
}

export default IndexPage
