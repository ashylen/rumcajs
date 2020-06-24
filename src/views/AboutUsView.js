import React from "react"

import styled from "styled-components"

// Components

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 15px;
  line-height: 1.4;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`

const StyledSectionContact = styled.section`
  background-color: #343a40;
`
const StyledParagraph = styled.p`
  line-height: 1.4;
  font-size: 1.6rem;
  margin-bottom: 15px;

  span {
    font-weight: bold;
  }

  white-space: pre-line;
`

const StyledInner = styled.section`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  padding: 30px 0;
`

const AboutUsView = () => (
  <StyledSectionContact>
    <StyledInner>
      <StyledH2>O NAS</StyledH2>
      <StyledParagraph>
        Rumcajs wynajem autokarów Lorem ipsum Rumcajs wynajem autokarów Lorem
        ipsum Rumcajs wynajem autokarów Lorem ipsum Rumcajs wynajem autokarów
        Lorem ipsum Rumcajs wynajem autokarów Lorem ipsum Rumcajs wynajem
        autokarów Lorem ipsum Rumcajs wynajem autokarów Lorem ipsum
      </StyledParagraph>
      <StyledParagraph>
        Rumcajs wynajem autokarów Lorem ipsum Rumcajs wynajem autokarów Lorem
        ipsum Rumcajs wynajem autokarów Lorem ipsum Rumcajs wynajem autokarów
        Lorem ipsum Rumcajs wynajem autokarów Lorem ipsum Rumcajs wynajem
        autokarów Lorem ipsum Rumcajs wynajem autokarów Lorem ipsum Rumcajs
        wynajem autokarów Lorem ipsum Rumcajs wynajem autokarów Lorem ipsum
        Rumcajs wynajem autokarów Lorem ipsum
      </StyledParagraph>
    </StyledInner>
  </StyledSectionContact>
)

export default AboutUsView
