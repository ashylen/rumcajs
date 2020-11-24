import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import { dataNamesClear, dataNames } from "utils/constants"

// Components

const StyledH3 = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 15px;
  line-height: 1.4;
  text-align: left;

  &:after {
    content: "";
    width: 70px;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`

const StyledSectionHelpfulLinks = styled.section`
  border-top: 2px solid #343a40;
  background-color: #222;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  justify-content: center;
`

const StyledHelpfulLinksInner = styled.section`
  max-width: 300px;
  width: 100%;
  padding: 10px;
  margin: 0 10% 10px;
  text-align: left;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const StyledListItem = styled(props => <Link {...props} />)`
  color: #fff;
  padding: 7px 0;
  display: inline-flex;
  font-weight: 600;
  line-height: 1.3;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
  &:hover {
    color: #d1d1d1;
    text-decoration: underline;
    transform: translateX(5px);
  }
`

const StyledListItemInline = styled(props => <Link {...props} />)`
  color: #fff;
  display: inline;
  font-weight: 600;
  line-height: 1.3;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
  &:hover {
    color: #d1d1d1;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 1.7;
  }
`

const HelpfulLinks = () => (
  <StyledSectionHelpfulLinks>
    <StyledHelpfulLinksInner>
      <StyledH3>Przydatne linki</StyledH3>
      <StyledList>
        {dataNamesClear.map((city, key) => (
          <StyledListItem
            title={`Wynajem autokarów, Biuro turystyczne ${dataNames[key]}`}
            key={city}
            to={`wynajem-autokarow-${city}`}
          >
            <span>{`• Wynajem autokarów, Biuro turystyczne ${dataNames[key]}`}</span>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledHelpfulLinksInner>
    <StyledHelpfulLinksInner>
      <StyledH3>Obszary usług</StyledH3>
      <div>
        {dataNamesClear.map((city, key) => (
          <React.Fragment key={city}>
            <StyledListItemInline
              title={`Laweta ${dataNames[key]}`}
              to={`${city}`}
            >
              {`${dataNames[key]}`}
            </StyledListItemInline>
            {key + 1 < dataNamesClear.length ? `, ` : ""}
          </React.Fragment>
        ))}
      </div>
    </StyledHelpfulLinksInner>
  </StyledSectionHelpfulLinks>
)

export default HelpfulLinks
