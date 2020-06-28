import React from "react"

// Components
import HomeTemplate from "templates/HomeTemplate"
import SEO from "components/seo"
import AboutUsView from "views/AboutUsView"

import {
  StyledWrapper,
  StyledText,
  StyledFirstWord,
  StyledSecondWord,
  StyledThirdWord,
  StyledBackgroundSection,
} from "pages_styles/home"

const IndexPage = () => {
  return (
    <HomeTemplate>
      <SEO isHome title="Rumcajs - strona główna" />
      <StyledWrapper>
        <StyledBackgroundSection>
          <StyledText>
            <StyledFirstWord>WYCIECZKI</StyledFirstWord>
            <StyledSecondWord>BLISKIE I DALEKIE</StyledSecondWord>
            <StyledThirdWord>Wybierz się z nami!</StyledThirdWord>
          </StyledText>
        </StyledBackgroundSection>
      </StyledWrapper>
      <AboutUsView />
    </HomeTemplate>
  )
}

export default IndexPage
